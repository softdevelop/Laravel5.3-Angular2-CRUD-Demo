System.register(['angular2/platform/browser', 'angular2/core', './components/init/InitComponent', "angular2/http", "./services/api", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, InitComponent_1, http_1, api_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (InitComponent_1_1) {
                InitComponent_1 = InitComponent_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(InitComponent_1.InitComponent, [
                http_1.HTTP_PROVIDERS,
                api_1.Api,
                router_1.ROUTER_PROVIDERS,
                router_1.ROUTER_DIRECTIVES,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map