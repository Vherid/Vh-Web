(function() {
    var app = angular.module('incrVolks', []);
    app.controller('volksController', function($scope, $interval) {
        $scope.volksPrestige = 0;
        $scope.volksSupply = 0;
        $scope.volksFuel = 0;
        $scope.volksCasualties = 0;
        $scope.timerPrestige = 0;
        $scope.prestigeTimer = false;
        $scope.prestigeResult = 0;
        $scope.makePrestigePressed = false;

        $scope.makePrestige = function() {
            $scope.prestigeTimer = true;
        };

        $scope.numHeadquartersStaff = 0;
        $scope.costHeadquartersStaff = 5;
        $scope.hireHeadquartersStaff = function() {
            $scope.numHeadquartersStaff++;
            $scope.volksPrestige -= $scope.costHeadquartersStaff;
            $scope.costHeadquartersStaff = Math.ceil($scope.costHeadquartersStaff * 1.3);
        };

        $scope.numBoltActionGrenadier = 0;
        $scope.costBoltActionGrenadier = 10;
        $scope.hireBoltActionGrenadier = function() {
            $scope.numBoltActionGrenadier++;
            $scope.volksPrestige -= $scope.costBoltActionGrenadier;
            $scope.costBoltActionGrenadier = Math.ceil($scope.costBoltActionGrenadier * 1.5);
        };

        $scope.numMG34Grenadier = 0;
        $scope.costMG34Grenadier = 10;
        $scope.hireMG34Grenadier = function() {
            $scope.numMG34Grenadier++;
            $scope.volksPrestige -= $scope.costMG34Grenadier;
            $scope.costMG34Grenadier = Math.ceil($scope.costMG34Grenadier * 1.9);
        };


        $interval(function() {
            // Grenadiers add 1 per second (1/100 every 10ms)
            $scope.volksPrestige += ($scope.numHeadquartersStaff * .1 / 100);
            $scope.volksSupply += ($scope.numHeadquartersStaff * 3 / 100);

            $scope.volksPrestige += ($scope.numBoltActionGrenadier * 1 / 100);
            $scope.volksSupply -= ($scope.numBoltActionGrenadier * .1 / 100);

            $scope.volksPrestige += ($scope.numMG34Grenadier * 5 / 100);
            $scope.volksSupply -= ($scope.numMG34Grenadier * .5 / 100);
            // Start progressbar when prestige button is pushed
            if ($scope.prestigeTimer === true) {
                $scope.timerPrestige += (40 / 100);
            }
            // Check for progress bar hitting 100%, reset it, and then chance a prestige point
            if ($scope.timerPrestige >= 100) {
                $scope.prestigeTimer = false;
                $scope.timerPrestige = 0;
                $scope.prestigeResult = chance.d6();
                if ($scope.prestigeResult < 5) {
                    $scope.volksPrestige++;
                }
                $scope.makePrestigePressed = true;
            }
        }, 1);
    });
})();
