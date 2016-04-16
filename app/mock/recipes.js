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
                new recipe_1.Recipe('Rice Plate', 'Very Delicious Rice Plate', 'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
                    new ingredient_1.Ingredient('Rice1', 1),
                    new ingredient_1.Ingredient('Rice2', 2)
                ]),
                new recipe_1.Recipe('Dosa', 'Very Delicious Dosa', 'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
                    new ingredient_1.Ingredient('Dosa1', 3),
                    new ingredient_1.Ingredient('Dosa2', 4)
                ]),
                new recipe_1.Recipe('Samosa', 'Very Delicious Samosa', 'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
                    new ingredient_1.Ingredient('Samosa1', 5),
                    new ingredient_1.Ingredient('Samosa2', 6)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBRVcsT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDOUIsSUFBSSxlQUFNLENBQ1QsWUFBWSxFQUNaLDJCQUEyQixFQUMzQix5REFBeUQsRUFBRTtvQkFDMUQsSUFBSSx1QkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQzFCLElBQUksdUJBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUMxQixDQUFDO2dCQUNILElBQUksZUFBTSxDQUNULE1BQU0sRUFDTixxQkFBcUIsRUFDckIseURBQXlELEVBQUU7b0JBQzFELElBQUksdUJBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUMxQixJQUFJLHVCQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDMUIsQ0FBQztnQkFDSCxJQUFJLGVBQU0sQ0FDVCxRQUFRLEVBQ1IsdUJBQXVCLEVBQ3ZCLHlEQUF5RCxFQUFFO29CQUMxRCxJQUFJLHVCQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztvQkFDNUIsSUFBSSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQzVCLENBQUM7YUFDSCxDQUFBLENBQUMiLCJmaWxlIjoibW9jay9yZWNpcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XHJcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XHJcbmV4cG9ydCBsZXQgUkVDSVBFUzogUmVjaXBlW10gPSBbXHJcblx0bmV3IFJlY2lwZShcclxuXHRcdCdSaWNlIFBsYXRlJyxcclxuXHRcdCdWZXJ5IERlbGljaW91cyBSaWNlIFBsYXRlJyxcclxuXHRcdCdodHRwOi8vd3d3LmVhdG5wYXJrLmNvbS91cGxvYWQvbWVudS8yNDBCR1JPcmlnU3VwZXIuanBnJywgW1xyXG5cdFx0XHRuZXcgSW5ncmVkaWVudCgnUmljZTEnLCAxKSxcclxuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ1JpY2UyJywgMilcclxuXHRcdF0pLFxyXG5cdG5ldyBSZWNpcGUoXHJcblx0XHQnRG9zYScsXHJcblx0XHQnVmVyeSBEZWxpY2lvdXMgRG9zYScsXHJcblx0XHQnaHR0cDovL3d3dy5lYXRucGFyay5jb20vdXBsb2FkL21lbnUvMjQwQkdST3JpZ1N1cGVyLmpwZycsIFtcclxuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ0Rvc2ExJywgMyksXHJcblx0XHRcdG5ldyBJbmdyZWRpZW50KCdEb3NhMicsIDQpXHJcblx0XHRdKSxcclxuXHRuZXcgUmVjaXBlKFxyXG5cdFx0J1NhbW9zYScsXHJcblx0XHQnVmVyeSBEZWxpY2lvdXMgU2Ftb3NhJyxcclxuXHRcdCdodHRwOi8vd3d3LmVhdG5wYXJrLmNvbS91cGxvYWQvbWVudS8yNDBCR1JPcmlnU3VwZXIuanBnJywgW1xyXG5cdFx0XHRuZXcgSW5ncmVkaWVudCgnU2Ftb3NhMScsIDUpLFxyXG5cdFx0XHRuZXcgSW5ncmVkaWVudCgnU2Ftb3NhMicsIDYpXHJcblx0XHRdKVxyXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
