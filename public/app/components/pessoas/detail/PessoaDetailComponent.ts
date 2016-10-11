import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router"
import {Api} from "../../../services/api";

//import {IX} from "../../../interfaces/IX";

@Component({
    selector: 'pessoa',
    templateUrl: './app/components/pessoas/detail/index.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PessoaDetailComponent
{
    //var pessoa: any;
    //pessoa: Object;
    private pessoa: any;
    constructor(private _api: Api, private _params: RouteParams)
    {
        this._api.getPessoa(_params.get("id")).then(
            (res: any) => {
                this.pessoa = res.pessoa;
            },
            (error) => {
                console.error(error);
            }
        )
    }
}
