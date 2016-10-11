import {Component} from 'angular2/core';
import {Api} from "../../../services/api";
import {RouteParams} from "angular2/router"
import {PessoasForm} from '../form/PessoaForm';

@Component({
    selector: 'pessoa',
    templateUrl: './app/components/pessoas/edit/index.html',
    directives: [PessoasForm]
})

export class PessoaEditComponent
{
    pessoa: Object;
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
