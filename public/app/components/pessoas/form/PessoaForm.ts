import {Component, Input} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Api} from "../../../services/api";
import {IPessoa} from "../../../interfaces/IPessoa";

@Component({
    selector: 'pessoas-form',
    templateUrl: './app/components/pessoas/form/pessoas-form.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PessoasForm {
    @Input('pessoa') pessoa: IPessoa;
    @Input('isUpdate') isUpdate: boolean = false;
    @Input('action') action: string;
    errors: Array<Object> = [];

    constructor(private _router: Router, private _api: Api){

    }

    processPessoa(pessoa): void {
        !this.isUpdate ? this.save(pessoa) : this.update(pessoa);
    }

    save(pessoa)
    {
        let pessoa_string = this._pessoaString(pessoa);

        this._api.createPessoa(pessoa_string).then(
            (res) => {
                this._router.navigate(['/Pessoas']);
            },
            (error) => {
                if(error.status === 422) //código de respuesta de laravel cuando falla la validación
                {
                    this.errors = [];
                    let errors = error.json();
                    for(var key in errors) {
                         this.errors.push(errors[key]);
                    }
                }
            }
        );
    }

    update(pessoa)
    {
        let pessoa_string = this._pessoaString(pessoa);

        this._api.updatePessoa(pessoa_string, pessoa.id).then(
            (res) => {
                this._router.navigate(['/Pessoas']);
            },
            (error) => {
                if(error.status === 422)//código de respuesta de laravel cuando falla la validación
                {
                    this.errors = [];
                    let errors = error.json();
                    for(var key in errors) {
                        this.errors.push(errors[key]);
                    }
                }
            }
        );
    }

    private _pessoaString(pessoa): string{
        return "&nome="+pessoa.nome;

    }
}
