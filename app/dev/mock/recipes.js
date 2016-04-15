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
//# sourceMappingURL=recipes.js.map