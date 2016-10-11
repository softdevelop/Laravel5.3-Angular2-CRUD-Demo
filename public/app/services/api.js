System.register(["angular2/http", "angular2/core", 'rxjs/Rx', 'rxjs/Observable', 'rxjs/add/operator/share', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1;
    var Api;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_2) {},
            function (_3) {}],
        execute: function() {
            let Api = class Api {
                constructor(_http) {
                    this._http = _http;
                    //apiUrl: string = "http://localhost:8000/api/pessoas/";
                    this.apiUrl = "http://crudangular2.com/api/pessoas";
                    this.headers = new http_1.Headers;
                    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.headers.append('X-Requested-With', 'XMLHttpRequest');
                    this.pessoas$ = new Observable_1.Observable(observer => this._pessoasObserver = observer).share();
                    this._dataStore = { pessoas: [] };
                }
                getPessoas() {
                    this._http.get(this.apiUrl).map(response => response.json()).subscribe(data => {
                        this._dataStore.pessoas = data.pessoas;
                        this._pessoasObserver.next(this._dataStore.pessoas);
                    }, error => console.log('Não foi possivel carregar pessoas.'));
                }
                getPessoa(id) {
                    return new Promise((resolve, reject) => {
                        this._http.get(this.apiUrl + "/" + id)
                            .map((res) => res.json())
                            .subscribe((res) => {
                            resolve(res);
                        }, (error) => {
                            reject(error);
                        });
                    });
                }
                createPessoa(pessoa) {
                    return new Promise((resolve, reject) => {
                        this._http.post(this.apiUrl, pessoa, {
                            headers: this.headers
                        })
                            .map((res) => res.json())
                            .subscribe((res) => {
                            resolve(res);
                        }, (error) => {
                            reject(error);
                        });
                    });
                }
                updatePessoa(pessoa, id) {
                    return new Promise((resolve, reject) => {
                        this._http.patch(this.apiUrl + "/" + id, pessoa, {
                            headers: this.headers
                        })
                            .map((res) => res.json())
                            .subscribe((res) => {
                            resolve(res);
                        }, (error) => {
                            reject(error);
                        });
                    });
                }
                deletePessoa(id) {
                    alert(id);
                    this._http.delete(this.apiUrl + "/" + id, {
                        headers: this.headers
                    }).subscribe(response => {
                        this._dataStore.pessoas.forEach((t, i) => {
                            if (t.id === id) {
                                this._dataStore.pessoas.splice(i, 1);
                            }
                        });
                        this._pessoasObserver.next(this._dataStore.pessoas);
                    }, error => console.log('Não foi possível deletar a pessoa.'));
                }
            };
            Api = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], Api);
            exports_1("Api", Api);
        }
    }
});
//# sourceMappingURL=api.js.map