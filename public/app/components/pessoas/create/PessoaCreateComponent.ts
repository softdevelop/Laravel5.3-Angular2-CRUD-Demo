import {Component} from 'angular2/core';
import {Api} from "../../../services/api";
import {PessoasForm} from '../form/PessoaForm';

@Component({
    selector: 'pessoa-create',
    templateUrl: './app/components/pessoas/create/index.html',
    directives: [PessoasForm]
})

export class PessoaCreateComponent
{
    pessoa: Object = {

        nome: '',

    };
}
