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
//# sourceMappingURL=recipes.js.map