System.register(['angular2/platform/browser', './app.component', 'angular2/router', 'angular2/http', 'rxjs/Rx', "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, http_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                http_1.HTTP_PROVIDERS,
                http_1.JSONP_PROVIDERS])
                .catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQSxtQkFBUyxDQUFDLDRCQUFZLEVBQ2xCLENBQUMseUJBQWdCO2dCQUNiLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDO2dCQUMzRCxxQkFBYztnQkFDZCxzQkFBZSxDQUFDLENBQUM7aUJBQ3BCLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlMsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTLCBKU09OUF9QUk9WSURFUlMsIEhUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LFxyXG4gICAgW1JPVVRFUl9QUk9WSURFUlMsXHJcbiAgICAgICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksXHJcbiAgICAgICAgSFRUUF9QUk9WSURFUlMsXHJcbiAgICAgICAgSlNPTlBfUFJPVklERVJTXSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
