var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.defaultConfig = {
        limit: 999,
        categories: 0,
        sortByAmount: {
            value: false,
            inputValue: 0
        }
    };

    $scope.currentAppliedConfig = angular.copy($scope.defaultConfig);

    $scope.tableItems = [
        {
        Name: 'Apples' ,
        Price: 21.50,
        Category: 'Fruits',
        Count: 15
        },
        {
        Name: 'Oreo' ,
        Price: 12.00,
        Category: "Biscuits",
        Count: 30
        },
        {
        Name: 'Mars' ,
        Price: 13.20,
        Category: 'Chocolate',
        Count: 1
        },
        {
        Name: 'Bread' ,
        Price: 4.30,
        Category: 'Bakes',
        Count: 4
        },
        {
        Name: 'Icecream' ,
        Price: 7.00,
        Category: 'Sweets',
        Count: 3
        },
        {
        Name: 'Bananas' ,
        Price:25.65,
        Category: 'Fruits',
        Count: 45
        },
    ];


});
  