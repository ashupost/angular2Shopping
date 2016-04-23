System.register(["../shared/recipe", "../shared/ingredient"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var recipe_1, ingredient_1;
    var RECIPES;
    return {
        setters:[
            function (recipe_1_1) {
                recipe_1 = recipe_1_1;
            },
            function (ingredient_1_1) {
                ingredient_1 = ingredient_1_1;
            }],
        execute: function() {
            exports_1("RECIPES", RECIPES = [
                new recipe_1.Recipe('Special Rice Plate', 'Rice , Roti and Vegitable', 'http://uppercrustindia.com/dynamic/uploads/image/UC_57/Metro%20Centrc/Bombay%20Buzz/DSCN3142.jpg', [
                    new ingredient_1.Ingredient('Rice1', 1),
                    new ingredient_1.Ingredient('Rice2', 2)
                ]),
                new recipe_1.Recipe('Motichur ka ladoo', 'Dekh ke dil khus ho jaye..', 'http://www.totalbhakti.com/images/1288680617_Motichoor%20Ladoo.png', [
                    new ingredient_1.Ingredient('Dosa1', 3),
                    new ingredient_1.Ingredient('Dosa2', 4)
                ]),
                new recipe_1.Recipe('Bihar ka Litti', 'Enjoy Litti with Chokha', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Litti.jpg/400px-Litti.jpg', [
                    new ingredient_1.Ingredient('Samosa1', 5),
                    new ingredient_1.Ingredient('Samosa2', 6)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBRVcsT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBWTtnQkFDMUIsSUFBSSxlQUFNLENBQ04sb0JBQW9CLEVBQ3BCLDJCQUEyQixFQUMzQixrR0FBa0csRUFBRTtvQkFDaEcsSUFBSSx1QkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQzFCLElBQUksdUJBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QixDQUFDO2dCQUNOLElBQUksZUFBTSxDQUNOLG1CQUFtQixFQUNuQiw0QkFBNEIsRUFDNUIsb0VBQW9FLEVBQUU7b0JBQ2xFLElBQUksdUJBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUMxQixJQUFJLHVCQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDN0IsQ0FBQztnQkFDTixJQUFJLGVBQU0sQ0FDTixnQkFBZ0IsRUFDaEIseUJBQXlCLEVBQ3pCLHFGQUFxRixFQUFFO29CQUNuRixJQUFJLHVCQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztvQkFDNUIsSUFBSSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQy9CLENBQUM7YUFDVCxDQUFBLENBQUMiLCJmaWxlIjoibW9jay9yZWNpcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XHJcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XHJcbmV4cG9ydCBsZXQgUkVDSVBFUzpSZWNpcGVbXSA9IFtcclxuICAgIG5ldyBSZWNpcGUoXHJcbiAgICAgICAgJ1NwZWNpYWwgUmljZSBQbGF0ZScsXHJcbiAgICAgICAgJ1JpY2UgLCBSb3RpIGFuZCBWZWdpdGFibGUnLFxyXG4gICAgICAgICdodHRwOi8vdXBwZXJjcnVzdGluZGlhLmNvbS9keW5hbWljL3VwbG9hZHMvaW1hZ2UvVUNfNTcvTWV0cm8lMjBDZW50cmMvQm9tYmF5JTIwQnV6ei9EU0NOMzE0Mi5qcGcnLCBbXHJcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdSaWNlMScsIDEpLFxyXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnUmljZTInLCAyKVxyXG4gICAgICAgIF0pLFxyXG4gICAgbmV3IFJlY2lwZShcclxuICAgICAgICAnTW90aWNodXIga2EgbGFkb28nLFxyXG4gICAgICAgICdEZWtoIGtlIGRpbCBraHVzIGhvIGpheWUuLicsXHJcbiAgICAgICAgJ2h0dHA6Ly93d3cudG90YWxiaGFrdGkuY29tL2ltYWdlcy8xMjg4NjgwNjE3X01vdGljaG9vciUyMExhZG9vLnBuZycsIFtcclxuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ0Rvc2ExJywgMyksXHJcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdEb3NhMicsIDQpXHJcbiAgICAgICAgXSksXHJcbiAgICBuZXcgUmVjaXBlKFxyXG4gICAgICAgICdCaWhhciBrYSBMaXR0aScsXHJcbiAgICAgICAgJ0Vuam95IExpdHRpIHdpdGggQ2hva2hhJyxcclxuICAgICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi82LzZjL0xpdHRpLmpwZy80MDBweC1MaXR0aS5qcGcnLCBbXHJcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdTYW1vc2ExJywgNSksXHJcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdTYW1vc2EyJywgNilcclxuICAgICAgICBdKVxyXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
