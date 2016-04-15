System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroData;
    return {
        setters:[],
        execute: function() {
            HeroData = (function () {
                function HeroData() {
                }
                HeroData.prototype.createDb = function () {
                    var heroes = [
                        { "id": "1", "name": "Windstorm" },
                        { "id": "2", "name": "Bombasto" },
                        { "id": "3", "name": "Rakhi" },
                        { "id": "4", "name": "Tornado" }
                    ];
                    return { heroes: heroes };
                };
                return HeroData;
            }());
            exports_1("HeroData", HeroData);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC9oZXJvLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO2dCQVVBLENBQUM7Z0JBVEcsMkJBQVEsR0FBUjtvQkFDSSxJQUFJLE1BQU0sR0FBRzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTt3QkFDbEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7d0JBQ2pDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO3dCQUM5QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtxQkFDbkMsQ0FBQztvQkFDRixNQUFNLENBQUMsRUFBQyxRQUFBLE1BQU0sRUFBQyxDQUFDO2dCQUNwQixDQUFDO2dCQUNMLGVBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELCtCQVVDLENBQUEiLCJmaWxlIjoid2lraS1odHRwL2hlcm8tZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIZXJvRGF0YSB7XHJcbiAgICBjcmVhdGVEYigpIHtcclxuICAgICAgICBsZXQgaGVyb2VzID0gW1xyXG4gICAgICAgICAgICB7IFwiaWRcIjogXCIxXCIsIFwibmFtZVwiOiBcIldpbmRzdG9ybVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJpZFwiOiBcIjJcIiwgXCJuYW1lXCI6IFwiQm9tYmFzdG9cIiB9LFxyXG4gICAgICAgICAgICB7IFwiaWRcIjogXCIzXCIsIFwibmFtZVwiOiBcIlJha2hpXCIgfSxcclxuICAgICAgICAgICAgeyBcImlkXCI6IFwiNFwiLCBcIm5hbWVcIjogXCJUb3JuYWRvXCIgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIHtoZXJvZXN9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
