(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function(itemIndex) {
          ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
              {
                name: "Peanut Butter",
                quantity: "4"
              },
              {
                name: "Milk",
                quantity: "5"
              },
              {
                name: "Donuts",
                quantity: "50"
              },
              {
                name: "Cookies",
                quantity: "10"
              },
              {
                name: "Chocolate",
                quantity: "100"
              }
            ];

        var boughtItems = [];

        service.buyItem = function (itemIndex) {
          boughtItems.push(toBuyItems[itemIndex]);
          toBuyItems.splice(itemIndex, 1);
        }

        service.getToBuyItems = function() {
          return toBuyItems;
        }

        service.getBoughtItems = function() {
          return boughtItems;
        }
    }
})();
