System.register(['angular2/core', "../../../services/api", "angular2/router", '../form/PessoaForm'], function(exports_1, context_1) {
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
    var core_1, api_1, router_1, PessoaForm_1;
    var PessoaEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (PessoaForm_1_1) {
                PessoaForm_1 = PessoaForm_1_1;
            }],
        execute: function() {
            let PessoaEditComponent = class PessoaEditComponent {
                constructor(_api, _params) {
                    this._api = _api;
                    this._params = _params;
                    this._api.getPessoa(_params.get("id")).then((res) => {
                        this.pessoa = res.pessoa;
                    }, (error) => {
                        console.error(error);
                    });
                }
            };
            PessoaEditComponent = __decorate([
                core_1.Component({
                    selector: 'pessoa',
                    templateUrl: './app/components/pessoas/edit/index.html',
                    directives: [PessoaForm_1.PessoasForm]
                }), 
                __metadata('design:paramtypes', [api_1.Api, router_1.RouteParams])
            ], PessoaEditComponent);
            exports_1("PessoaEditComponent", PessoaEditComponent);
        }
    }
});
//# sourceMappingURL=PessoaEditComponent.js.map