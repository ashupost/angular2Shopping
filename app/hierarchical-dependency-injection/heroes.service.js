"use strict";
var HeroesService = (function () {
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
exports.HeroesService = HeroesService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtRQUNJLFdBQU0sR0FBZ0I7WUFDbEIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUM7WUFDMUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQztTQUMvQyxDQUFDO0lBS04sQ0FBQztJQUhHLGlDQUFTLEdBQVQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwiZmlsZSI6ImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvZXMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvZXNTZXJ2aWNlIHtcclxuICAgIGhlcm9lczogQXJyYXk8SGVybz4gPSBbXHJcbiAgICAgICAgeyBuYW1lOiBcIlJ1YmJlck1hblwiLCBwb3dlcjogJ2ZsZXhpYmlsaXR5J30sXHJcbiAgICAgICAgeyBuYW1lOiBcIlRvcm5hZG9cIiwgcG93ZXI6ICdXZWF0aGVyIGNoYW5nZXInfVxyXG4gICAgXTtcclxuXHJcbiAgICBnZXRIZXJvZXMgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlcm9lcztcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
