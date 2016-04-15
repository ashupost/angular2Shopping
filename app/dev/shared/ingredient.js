System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Ingredient;
    return {
        setters:[],
        execute: function() {
            Ingredient = (function () {
                function Ingredient(name, amount) {
                    this.name = name;
                    this.amount = amount;
                }
                return Ingredient;
            }());
            exports_1("Ingredient", Ingredient);
        }
    }
});
//# sourceMappingURL=ingredient.js.map