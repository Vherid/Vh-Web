(function() {
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').focus()
    })

    $('.race-option').click(function() {
        $('.race-option').removeClass('active');
        $(this).addClass('active');
    })

    $('.armor-option').click(function() {
        $('.armor-option').removeClass('active');
        $(this).addClass('active');
    })

    var app = angular.module("dwarfFortressArena", []);
    app.controller("arenaHireController", function($scope) {
        $scope.hirePointsAmount = 1500;

        $scope.setRaceKobold = function() {
            $scope.hirePointsAmount = 1500;
        }
        $scope.setRaceGoblin = function() {
            $scope.hirePointsAmount = 1400;
        }
        $scope.setRaceElf = function() {
            $scope.hirePointsAmount = 1350;
        }
        $scope.setRaceDwarf = function() {
            $scope.hirePointsAmount = 1300;
        }
        $scope.setRaceHuman = function() {
            $scope.hirePointsAmount = 1200;
        }

        $scope.toggleWeapon = {item: -1};
        $scope.toggleWeaponMaterial = {item: -1};

        this.armaments = weapons;
        this.armMaterials = materials;

    });

    var weapons = [{
            name: "Dagger",
            price: 90,
        }, {
            name: "Short Sword",
            price: 100,
        }, {
            name: "Long Sword",
            price: 110,
        }, {
            name: "Battle Axe",
            price: 90,
        }, {
            name: "Mace",
            price: 180,
        }, {
            name: "Warhammer",
            price: 200,
        }, {
            name: "Spear",
            price: 110,
        }];

    var materials = [{
        name: "Wood",
        multi: 0.75,
        weight: "Light",
        edge: "Very Poor",
        armor: "Very Poor"
    }, {
        name: "Copper",
        multi: 1,
        weight: "Heavy",
        edge: "Mediocre",
        armor: "Mediocre"
    }, {
        name: "Silver",
        multi: 1.5,
        weight: "Very Heavy",
        edge: "Poor",
        armor: "Poor"
    }, {
        name: "Iron",
        multi: 2,
        weight: "Medium",
        edge: "Good",
        armor: "Good"
    }, {
        name: "Bronze",
        multi: 2,
        weight: "Heavy",
        edge: "Good",
        armor: "Good"
    }, {
        name: "Platinum",
        multi: 2.5,
        weight: "Extremely Heavy",
        edge: "Very Poor",
        armor: "Poor"
    }, {
        name: "Steel",
        multi: 5,
        weight: "Medium",
        edge: "Very Good",
        armor: "Very Good"
    }, {
        name: "Adamantine",
        multi: 12,
        weight: "Extremely Light",
        edge: "Exceptional",
        armor: "Exceptional"
    }];
})();
