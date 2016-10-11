import {Component} from "angular2/core"
import {PessoaListComponent} from "../pessoas/list/PessoaListComponent";
import {PessoaEditComponent} from "../pessoas/edit/PessoaEditComponent";
import {PessoaCreateComponent} from "../pessoas/create/PessoaCreateComponent";
import {PessoaDetailComponent} from "../pessoas/detail/PessoaDetailComponent";

import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';

@RouteConfig([
    {path:'/pessoas',           name: 'Pessoas',        component: PessoaListComponent},
    {path:'/pessoas/:id',       name: 'PessoaDetail',   component: PessoaDetailComponent},
    {path:'/pessoas/edit/:id',  name: 'PessoaEdit',     component: PessoaEditComponent},
    {path:'/pessoas/create',    name: 'PessoaCreate',   component: PessoaCreateComponent},
    {path:'/', name: 'root', redirectTo: ['/Pessoas']}
])

@Component({
    selector: "init",
    templateUrl: './app/components/init/init.html',
    directives: [ROUTER_DIRECTIVES]
})

export class InitComponent {

}
