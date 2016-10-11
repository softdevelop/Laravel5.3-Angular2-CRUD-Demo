import {Component, Input} from 'angular2/core';
import {Api} from "../../../services/api";

import {
    ROUTER_DIRECTIVES
} from 'angular2/router';

declare var jQuery:any;

@Component({
    selector: 'pessoa-remove',
    templateUrl: './app/components/pessoas/remove/index.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PessoaRemoveComponent
{
    @Input('pessoa') pessoa: Object;
    constructor(private _api: Api)
    {

    }

    remove(id)
    {
        this._api.deletePessoa(id);
        jQuery("#remove-pessoa").modal("hide");
        jQuery("#item-"+id).remove();
    }
}
