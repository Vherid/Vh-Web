(function() {
    var app = angular.module('iiftApp', []);

    app.controller('iiftRoller', function($scope) {
        $scope.dieOne = 1;
        $scope.dieTwo = 2;
        $scope.TEM = 0;
        $scope.FP = 0;
        $scope.rollPushed = false;


        $scope.rollDie = function() {
            $scope.dieOne = Math.floor(Math.random() * 6) + 1;
            $scope.dieTwo = Math.floor(Math.random() * 6) + 1;
            $scope.dieTotal = $scope.dieOne + $scope.dieTwo + $scope.TEM;
            var FPKeyStrength = ['1','2','4','6','8','12','16','20','24','30','36']

            if ($scope.dieOne === $scope.dieTwo) {
                $scope.cowerAdjust = 1;
            } else {
                $scope.cowerAdjust = 0;
            }
            $scope.FPTotal = $scope.FP - $scope.cowerAdjust;

            switch ($scope.FPTotal) {
                case 1:
                    var iiftTableFP1 = ['1KIA', 'K/1', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < 7) {
                        $scope.result = iiftTableFP1[0 + ($scope.dieTotal > 0) + ($scope.dieTotal > 1) + ($scope.dieTotal > 2) + ($scope.dieTotal > 3) + ($scope.dieTotal > 4) + ($scope.dieTotal > 5)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[6];
                    }
                    $scope.rollPushed = true;
                    break;
                case 1.5:
                    var iiftTableFP1 = ['1KIA', 'K/1', '1MC', 'K/1', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < 7) {
                        $scope.result = iiftTableFP1[0 + ($scope.dieTotal > 0) + ($scope.dieTotal > 1) + ($scope.dieTotal > 2) + ($scope.dieTotal > 3) + ($scope.dieTotal > 4) + ($scope.dieTotal > 5)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[6];
                    }
                    $scope.rollPushed = true;
                    break;
                case 2:
                    var iiftTableFP1 = ['2KIA', '1KIA', 'K/1', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < 8) {
                        $scope.result = iiftTableFP1[0 + ($scope.dieTotal > 0) + ($scope.dieTotal > 1) + ($scope.dieTotal > 2) + ($scope.dieTotal > 3) + ($scope.dieTotal > 4) + ($scope.dieTotal > 5) + ($scope.dieTotal > 6)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[7];
                    }
                    $scope.rollPushed = true;
                    break;
                case 2.5:
                    var iiftTableFP1 = ['2KIA', '1KIA', 'K/2', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < 8) {
                        $scope.result = iiftTableFP1[0 + ($scope.dieTotal > 0) + ($scope.dieTotal > 1) + ($scope.dieTotal > 2) + ($scope.dieTotal > 3) + ($scope.dieTotal > 4) + ($scope.dieTotal > 5) + ($scope.dieTotal > 6)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[7];
                    }
                    $scope.rollPushed = true;
                    break;
                case 3:
                    var iiftTableFP1 = ['2KIA', '1KIA', 'K/2', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < 9) {
                        $scope.result = iiftTableFP1[0 + ($scope.dieTotal > 0) + ($scope.dieTotal > 1) + ($scope.dieTotal > 2) + ($scope.dieTotal > 3) + ($scope.dieTotal > 4) + ($scope.dieTotal > 5) + ($scope.dieTotal > 6) + ($scope.dieTotal > 7)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[8];
                    }
                    $scope.rollPushed = true;
                    break;
            }

        }

    });
})();
