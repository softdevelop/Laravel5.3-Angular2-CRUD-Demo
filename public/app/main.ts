import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {InitComponent} from './components/init/InitComponent';
import {HTTP_PROVIDERS} from "angular2/http";
import {Api} from "./services/api";

import {
    LocationStrategy,
    HashLocationStrategy,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';

bootstrap(InitComponent, [
    HTTP_PROVIDERS,
    Api,
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
