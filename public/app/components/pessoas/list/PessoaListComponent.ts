import {Component} from 'angular2/core';
import {Api} from "../../../services/api";
import {PessoaRemoveComponent} from "../remove/PessoaRemoveComponent"

import {
    ROUTER_DIRECTIVES
} from 'angular2/router';

@Component({
    selector: 'pessoa',
    templateUrl: './app/components/pessoas/list/index.html',
    directives: [ROUTER_DIRECTIVES, PessoaRemoveComponent]
})

export class PessoaListComponent
{
    pessoas: Object;
    selectedPessoa: Object = {};
    constructor(private _api: Api)
    {
        this.pessoas = this._api.pessoas$;
        this._api.getPessoas();
    }
}
