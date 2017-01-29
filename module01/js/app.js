(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    const MAX_RECOMMEND_ITEMS = 3;

    $scope.items        = "";
    $scope.message      = "";
    $scope.textboxClass = "";
    $scope.messageClass = "";

    $scope.checkItems = function () {
        $scope.message      = sayMessage($scope.items);
        $scope.textboxClass = getTextboxClass($scope.items);
        $scope.messageClass = getMessageClass($scope.items);
    };

    $scope.reset = function () {
        $scope.message      = "";
        $scope.textboxClass = "";
        $scope.messageClass = "";
    }

    function sayMessage(items) {
        if (items == "") {
            return "Please enter data first";
        }

        var arrayOfItems    = itemsToArray($scope.items);

        return getMessage(arrayOfItems.length);
    }

    function getMessage(itemsNumber) {
        if (itemsNumber > MAX_RECOMMEND_ITEMS) {
            return "Too much!";
        }

        return "Enjoy!";
    }

    function getMessageClass(items) {
        if (items) {
            return "text-success";
        }

        return "text-danger";
    }

    function getTextboxClass(items) {
        if (items) {
            return "has-success";
        }

        return "has-error";
    }

    function itemsToArray(items) {
        return items.split(',');
    }
}

})();
