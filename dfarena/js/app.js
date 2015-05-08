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

    $('.skill-option').click(function() {
        $('.skill-option').removeClass('active');
        $(this).addClass('active');
    })

    var app = angular.module("dwarfFortressArena", []);
    app.controller("arenaHireController", function($scope) {
        $scope.hirePointsAmount = 1500;
        var racePointsAmount = 1500

        $scope.setRaceKobold = function() {
            racePointsAmount = 1500;
            $scope.hirePointsAmount = racePointsAmount;
        }
        $scope.setRaceGoblin = function() {
            racePointsAmount = 1400;
            $scope.hirePointsAmount = racePointsAmount;
        }
        $scope.setRaceElf = function() {
            racePointsAmount = 1350;
            $scope.hirePointsAmount = racePointsAmount;
        }
        $scope.setRaceDwarf = function() {
            racePointsAmount = 1300;
            $scope.hirePointsAmount = racePointsAmount;
        }
        $scope.setRaceHuman = function() {
            racePointsAmount = 1200;
            $scope.hirePointsAmount = racePointsAmount;
        }

        $scope.toggleWeapon = {item: -1};
        $scope.toggleWeaponMaterial = {item: -1};

        this.armaments = weapons;
        this.armMaterials = materials;

        var skillCost = 300;
        $scope.buySkill = function() {
            $scope.hirePointsAmount = racePointsAmount - skillCost;
        }
        $scope.noSkill = function() {
            $scope.hirePointsAmount = racePointsAmount;
        }

    });

    app.controller("arenaViewController", function($scope) {
        this.contestants = gladiators;

    });

    app.controller("arenaContentionController", function($scope) {
        this.contentions = contests;

    });

    var contests = [
    {
        name: "Series 1",
        numcontests: "12",
        matchnum: "35"
    },
    {
        name: "Series 2",
        numcontests: "16",
        matchnum: "41"
    },
    {
        name: "Series 3",
        numcontests: "24",
        matchnum: "67"
    },
    {
        name: "Series 4",
        numcontests: "10",
        matchnum: "31"
    },
    {
        name: "Series 5",
        numcontests: "8",
        matchnum: "25"
    },
    {
        name: "Series 6",
        numcontests: "11",
        matchnum: "84"
    }
    ]

    var gladiators = [
        {
            name: "Urist",
            race: "Dwarf",
            wins: "10",
            losses: "0"
        },
        {
            name: "Frank",
            race: "Human",
            wins: "9",
            losses: "1"
        },
        {
            name: "Zero",
            race: "Elf",
            wins: "8",
            losses: "2"
        },
        {
            name: "Trollface",
            race: "Goblin",
            wins: "8",
            losses: "4"
        },
        {
            name: "Ushrek",
            race: "Kobold",
            wins: "7",
            losses: "2"
        },
        {
            name: "Udyr",
            race: "Dwarf",
            wins: "6",
            losses: "4"
        },
        {
            name: "Azhek",
            race: "Elf",
            wins: "3",
            losses: "7"
        },
        {
            name: "Notle",
            race: "Goblin",
            wins: "2",
            losses: "10"
        },
        {
            name: "Steve",
            race: "Human",
            wins: "1",
            losses: "8"
        },
        {
            name: "Buschemi",
            race: "Dwarf",
            wins: "3",
            losses: "0"
        },
        {
            name: "Kid",
            race: "Human",
            wins: "0",
            losses: "0"
        }

    ];

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
