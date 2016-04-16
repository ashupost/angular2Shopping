System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroesService;
    return {
        setters:[],
        execute: function() {
            HeroesService = (function () {
                function HeroesService() {
                    this.heroes = [
                        { name: "RubberMan", power: 'flexibility' },
                        { name: "Tornado", power: 'Weather changer' }
                    ];
                }
                HeroesService.prototype.getHeroes = function () {
                    return this.heroes;
                };
                return HeroesService;
            }());
            exports_1("HeroesService", HeroesService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFnQjt3QkFDbEIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUM7d0JBQzFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUM7cUJBQy9DLENBQUM7Z0JBS04sQ0FBQztnQkFIRyxpQ0FBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQUNMLG9CQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx5Q0FTQyxDQUFBIiwiZmlsZSI6ImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvZXMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvZXNTZXJ2aWNlIHtcclxuICAgIGhlcm9lczogQXJyYXk8SGVybz4gPSBbXHJcbiAgICAgICAgeyBuYW1lOiBcIlJ1YmJlck1hblwiLCBwb3dlcjogJ2ZsZXhpYmlsaXR5J30sXHJcbiAgICAgICAgeyBuYW1lOiBcIlRvcm5hZG9cIiwgcG93ZXI6ICdXZWF0aGVyIGNoYW5nZXInfVxyXG4gICAgXTtcclxuXHJcbiAgICBnZXRIZXJvZXMgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlcm9lcztcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
