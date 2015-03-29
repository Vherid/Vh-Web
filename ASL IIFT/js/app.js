(function() {
    var app = angular.module('iiftApp', []);

    app.controller('iiftRoller', function($scope) {
        // Setting variables, the die are set as such to force them to start hidden but also not be even which toggles the cower alert.
        $scope.dieOne = 1;
        $scope.dieTwo = 2;
        $scope.TEM = 0;
        $scope.FP = 0;
        $scope.rollPushed = false;
        $scope.FPTotal = 0;
        var tableLengthResult = 0;

        // Function activates upon pushing the roll button, rolls 2d6, adds them with the TEM and then uses a switch case to return results.
        $scope.rollDie = function() {
            $scope.dieOne = Math.floor(Math.random() * 6) + 1;
            $scope.dieTwo = Math.floor(Math.random() * 6) + 1;
            $scope.dieTotal = $scope.dieOne + $scope.dieTwo + $scope.TEM;
            var FPKeyStrength = [0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 30];

            // In the event of a cower, this determines what FP value the FP is dropped down to, using the Key Strength Array. If no cower, FP is still whatever number was entered.
            if ($scope.dieOne === $scope.dieTwo) {
                if ($scope.FP <= 1) {
                    $scope.FPTotal = FPKeyStrength[0];
                } else if ($scope.FP > 1 && $scope.FP <= 2) {
                    $scope.FPTotal = FPKeyStrength[1];
                } else if ($scope.FP > 2 && $scope.FP <= 4) {
                    $scope.FPTotal = FPKeyStrength[2];
                } else if ($scope.FP > 4 && $scope.FP <= 6) {
                    $scope.FPTotal = FPKeyStrength[3];
                } else if ($scope.FP > 6 && $scope.FP <= 8) {
                    $scope.FPTotal = FPKeyStrength[4];
                } else if ($scope.FP > 8 && $scope.FP <= 12) {
                    $scope.FPTotal = FPKeyStrength[5];
                } else if ($scope.FP > 12 && $scope.FP <= 16) {
                    $scope.FPTotal = FPKeyStrength[6];
                } else if ($scope.FP > 16 && $scope.FP <= 20) {
                    $scope.FPTotal = FPKeyStrength[7];
                } else if ($scope.FP > 20 && $scope.FP <= 24) {
                    $scope.FPTotal = FPKeyStrength[8];
                } else if ($scope.FP > 24 && $scope.FP <= 30) {
                    $scope.FPTotal = FPKeyStrength[9];
                } else {
                    $scope.FPTotal = FPKeyStrength[10];
                }
            } else {
                $scope.FPTotal = $scope.FP;
            }

            // Small function to help check the $scope.result in each case statement without creating an ever increasingly large (dieTotal>0) ... (dieTotal>X) check.
            tableLengthResultCheck = function(tableLengthResult) {
                for (var i = 0; i <= iiftTableFP.length - 1; i++) {
                    tableLengthResult += ($scope.dieTotal > i);
                }
                return tableLengthResult;
            }

            // This takes the totals from above and provides the results from the IIFT.
            switch ($scope.FPTotal) {
                case 0:
                    var iiftTableFP = ['No Result'];
                    $scope.result = iiftTableFP[0];
                    break;
                case 1:
                    var iiftTableFP = ['1KIA', 'K/1', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if ($scope.dieTotal >= 0 && $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 1.5:
                    var iiftTableFP = ['1KIA', 'K/1', '1MC', 'K/1', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 2:
                    var iiftTableFP = ['2KIA', '1KIA', 'K/1', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 2.5:
                    var iiftTableFP = ['2KIA', '1KIA', 'K/2', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[7];
                    }
                    break;
                case 3:
                    var iiftTableFP = ['2KIA', '1KIA', 'K/2', '2MC', '1MC', 'NMC', 'PTC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 3.5:
                    var iiftTableFP = ['2KIA', '1KIA', 'K/2', '2MC', '1MC', 'NMC', 'NMC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 4:
                    var iiftTableFP = ['2KIA', '1KIA', 'K/2', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 4.5:
                    var iiftTableFP = ['2KIA', '1KIA', 'K/2', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 5:
                    var iiftTableFP = ['2KIA', '1KIA', 'K/2', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 6:
                    var iiftTableFP = ['3KIA', '2KIA', '1KIA', 'K/2', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 7:
                    var iiftTableFP = ['3KIA', '2KIA', '1KIA', 'K/2', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 8:
                    var iiftTableFP = ['3KIA', '2KIA', '1KIA', 'K/2', '2MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 9:
                    var iiftTableFP = ['3KIA', '2KIA', '1KIA', 'K/3', '3MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 10:
                    var iiftTableFP = ['3KIA', '2KIA', '1KIA', 'K/3', '3MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 11:
                    var iiftTableFP = ['3KIA', '2KIA', '1KIA', 'K/3', '3MC', '2MC', '1MC', '1MC', '1MC', 'NMC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 12:
                    var iiftTableFP = ['3KIA', '2KIA', '1KIA', 'K/3', '3MC', '2MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 13:
                    var iiftTableFP = ['3KIA', '2KIA', '1KIA', 'K/3', '3MC', '3MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 14:
                    var iiftTableFP = ['3KIA', '2KIA', '1KIA', 'K/3', '3MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 15:
                    var iiftTableFP = ['4KIA', '3KIA', '2KIA', '1KIA', 'K/3', '3MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 16:
                    var iiftTableFP = ['4KIA', '3KIA', '2KIA', '1KIA', 'K/3', '3MC', '2MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 17:
                    var iiftTableFP = ['4KIA', '3KIA', '2KIA', '1KIA', 'K/3', '3MC', '2MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 18:
                    var iiftTableFP = ['4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 19:
                    var iiftTableFP = ['4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'NMC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 20:
                    var iiftTableFP = ['4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 21:
                    var iiftTableFP = ['4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 22:
                    var iiftTableFP = ['4KIA', '3KIA', '2KIA', '1KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 23:
                    var iiftTableFP = ['5KIA', '4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 24:
                    var iiftTableFP = ['5KIA', '4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 25:
                    var iiftTableFP = ['5KIA', '4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 26:
                    var iiftTableFP = ['5KIA', '4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 27:
                    var iiftTableFP = ['5KIA', '4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '4MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'PTC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 28:
                    var iiftTableFP = ['5KIA', '4KIA', '3KIA', '2KIA', '1KIA', 'K/4', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'NMC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 29:
                    var iiftTableFP = ['5KIA', '4KIA', '4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', 'NMC', 'NMC', 'CTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 30:
                    var iiftTableFP = ['6KIA', '5KIA', '4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
                case 31:
                    var iiftTableFP = ['6KIA', '5KIA', '4KIA', '3KIA', '2KIA', '1KIA', 'K/4', '4MC', '3MC', '2MC', '2MC', '1MC', '1MC', 'NMC', 'PTC', 'No Result'];
                    if (0 <= $scope.dieTotal < iiftTableFP.length) {
                        $scope.result = iiftTableFP[0 + tableLengthResultCheck(0)];
                    } else if ($scope.dieTotal < 0) {
                        $scope.result = iiftTable[0];
                    } else {
                        $scope.result = iiftTable[iiftTableFP.length - 1];
                    }
                    break;
            }
            $scope.rollPushed = true;

        }

    });
})();
