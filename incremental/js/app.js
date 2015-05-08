(function() {
    var app = angular.module("incrementalStrelkovy", []);
    app.controller("strelkovyController", function($scope, $interval) {
        $scope.strelkovyGlory = 0;
        $scope.strelkovySupplies = 0;
        $scope.strelkovyFuel = 0;
        $scope.strelkovyCasualties = 0;
        $scope.gloryTimerTime = 0;
        $scope.gloryTimer = false;
        $scope.gloryResult = 0;
        $scope.makeGloryPressed = false;

        $scope.makeGlory = function() {
            $scope.gloryTimer = true;
        };

        // Units
        // Headquarters
        $scope.numPartyLeader = 0;
        $scope.costPartyLeader = 1;
        $scope.hirePartyLeader = function() {
            $scope.numPartyLeader++;
            $scope.strelkovyGlory -= $scope.costPartyLeader;
            $scope.costPartyLeader = Math.ceil($scope.costPartyLeader * 1.5);
        };

        $scope.numCommissar = 0;
        $scope.costCommissar = 4;
        $scope.hireCommissar = function() {
            $scope.numCommissar++;
            $scope.strelkovyGlory -= $scope.costCommissar;
            $scope.costCommissar = Math.ceil($scope.costCommissar * 1.3);
        };

        $scope.numSquadLeader = 0;
        $scope.costSquadLeader = 4;
        $scope.hireSquadLeader = function() {
            $scope.numSquadLeader++;
            $scope.strelkovyGlory -= $scope.costSquadLeader;
            $scope.costSquadLeader = Math.ceil($scope.costSquadLeader * 1.3);
        };

        //Infantry
        $scope.rateGloryPartisan = 1;
        $scope.rateSupplyPartisan = -.1;
        $scope.upgradeNum = 10;
        $scope.numPartisan = 0;
        $scope.costPartisan = 10;
        $scope.hirePartisan = function() {
            $scope.numPartisan += chance.integer({
                min: 1,
                max: 5
            });
            $scope.strelkovyGlory -= $scope.costPartisan;
            $scope.costPartisan = Math.ceil($scope.costPartisan * 1.5);
        };

        $scope.upgradePartisan = function() {
            $scope.rateGloryPartisan += Math.ceil($scope.rateGloryPartisan*1.1);
            $scope.costUpgradePartisan = Math.ceil($scope.costPartisan * 2);
        }

        $scope.numConscript = 0;
        $scope.costConscript = 10;
        $scope.hireConscript = function() {
            $scope.numConscript++;
            $scope.strelkovyGlory -= $scope.costConscript;
            $scope.costConscript = Math.ceil($scope.costConscript * 1.9);
        };

        $scope.numSapper = 0;
        $scope.costSapper = 50;
        $scope.hireSapper = function() {
            $scope.numSapper++;
            $scope.strelkovyGlory -= $scope.costSapper;
            $scope.costSapper = Math.ceil($scope.costSapper * 2);
        };


        $interval(function() {
            // Grenadiers add 1 per second (1/100 every 10ms)
            $scope.strelkovyGlory += ($scope.numPartyLeader * .5 / 100);
            $scope.strelkovySupplies += ($scope.numPartyLeader * 3 / 100);

            $scope.strelkovyGlory += ($scope.numPartisan * $scope.rateGloryPartisan / 100);
            $scope.strelkovySupplies -= ($scope.numPartisan * $scope.rateSupplyPartisan / 100);

            $scope.strelkovyGlory += ($scope.numConscript * 5 / 100);
            $scope.strelkovySupplies -= ($scope.numConscript * .5 / 100);

            $scope.strelkovyGlory += ($scope.numSapper * 35 / 100);
            $scope.strelkovySupplies -= ($scope.numSapper * 2 / 100);
            // Start progressbar when prestige button is pushed
            if ($scope.gloryTimer === true) {
                $scope.gloryTimerTime += (40 / 100);
            }
            // Check for progress bar hitting 100%, reset it, and then chance a prestige point
            if ($scope.gloryTimerTime >= 100) {
                $scope.gloryTimer = false;
                $scope.gloryTimerTime = 0;
                $scope.gloryResult = chance.d6();
                if ($scope.gloryResult < 5) {
                    $scope.strelkovyGlory++;
                }
                $scope.makeGloryPressed = true;
            }
        }, 1);
    });
})();
