System.register(['angular2/core', 'angular2/router', "../../../services/api"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, api_1;
    var PessoasForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            }],
        execute: function() {
            let PessoasForm = class PessoasForm {
                constructor(_router, _api) {
                    this._router = _router;
                    this._api = _api;
                    this.isUpdate = false;
                    this.errors = [];
                }
                processPessoa(pessoa) {
                    !this.isUpdate ? this.save(pessoa) : this.update(pessoa);
                }
                save(pessoa) {
                    let pessoa_string = this._pessoaString(pessoa);
                    this._api.createPessoa(pessoa_string).then((res) => {
                        this._router.navigate(['/Pessoas']);
                    }, (error) => {
                        if (error.status === 422) {
                            this.errors = [];
                            let errors = error.json();
                            for (var key in errors) {
                                this.errors.push(errors[key]);
                            }
                        }
                    });
                }
                update(pessoa) {
                    let pessoa_string = this._pessoaString(pessoa);
                    this._api.updatePessoa(pessoa_string, pessoa.id).then((res) => {
                        this._router.navigate(['/Pessoas']);
                    }, (error) => {
                        if (error.status === 422) {
                            this.errors = [];
                            let errors = error.json();
                            for (var key in errors) {
                                this.errors.push(errors[key]);
                            }
                        }
                    });
                }
                _pessoaString(pessoa) {
                    return "&nome=" + pessoa.nome;
                }
            };
            __decorate([
                core_1.Input('pessoa'), 
                __metadata('design:type', Object)
            ], PessoasForm.prototype, "pessoa", void 0);
            __decorate([
                core_1.Input('isUpdate'), 
                __metadata('design:type', Boolean)
            ], PessoasForm.prototype, "isUpdate", void 0);
            __decorate([
                core_1.Input('action'), 
                __metadata('design:type', String)
            ], PessoasForm.prototype, "action", void 0);
            PessoasForm = __decorate([
                core_1.Component({
                    selector: 'pessoas-form',
                    templateUrl: './app/components/pessoas/form/pessoas-form.html',
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [router_1.Router, api_1.Api])
            ], PessoasForm);
            exports_1("PessoasForm", PessoasForm);
        }
    }
});
//# sourceMappingURL=PessoaForm.js.map