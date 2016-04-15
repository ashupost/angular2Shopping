System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Recipe;
    return {
        setters:[],
        execute: function() {
            Recipe = (function () {
                function Recipe(name, content, imageUrl, ingredients) {
                    this.name = name;
                    this.content = content;
                    this.imageUrl = imageUrl;
                    this.ingredients = ingredients;
                }
                return Recipe;
            }());
            exports_1("Recipe", Recipe);
        }
    }
});
//# sourceMappingURL=recipe.js.map