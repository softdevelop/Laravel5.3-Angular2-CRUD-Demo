import {Http, Headers, Response} from "angular2/http"
import {Injectable} from "angular2/core"
import {IPessoa} from "../interfaces/IPessoa"
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Injectable()
export class Api
{
    //apiUrl: string = "http://localhost:8000/api/pessoas/";
    apiUrl: string = "http://crudangular2.com/api/pessoas";
    headers: Headers = new Headers;
    pessoas$: Observable<IPessoa[]>;
    private _pessoasObserver: Observer<IPessoa[]>;
    private _dataStore: {
        pessoas: IPessoa[]
    };

    constructor(private _http: Http)
    {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');

        this.pessoas$ = new Observable(observer => this._pessoasObserver = observer).share();
        this._dataStore = { pessoas: [] };
    }

    public getPessoas()
    {
        this._http.get(this.apiUrl).map(response => response.json()).subscribe(data => {
            this._dataStore.pessoas = data.pessoas;
            this._pessoasObserver.next(this._dataStore.pessoas);
        }, error => console.log('Não foi possivel carregar pessoas.'));
    }

    public getPessoa(id)
    {
        return new Promise((resolve, reject) =>
        {
            this._http.get(this.apiUrl + "/" + id)
                .map((res: Response) => res.json())
                .subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
        })
    }

    public createPessoa(pessoa)
    {
        return new Promise((resolve, reject) => {
            this._http.post(this.apiUrl, pessoa, {
                headers: this.headers
            })
            .map((res: Response) => res.json())
            .subscribe(
                (res) => {
                    resolve(res);
                },
                (error) => {
                    reject(error);
                }
            );
        })
    }

    public updatePessoa(pessoa, id)
    {
        return new Promise((resolve, reject) => {
            this._http.patch(this.apiUrl + "/" + id, pessoa, {
                headers: this.headers
            })
            .map((res: Response) => res.json())
            .subscribe(
                (res) => {
                    resolve(res);
                },
                (error) => {
                    reject(error);
                }
            );
        })
    }

    public deletePessoa(id)
    {
        alert(id);
        this._http.delete(this.apiUrl +"/"+ id, {
            headers: this.headers
        }).subscribe(response => {
            this._dataStore.pessoas.forEach((t, i) => {
                if (t.id === id) { this._dataStore.pessoas.splice(i, 1); }
            });
            this._pessoasObserver.next(this._dataStore.pessoas);
        }, error => console.log('Não foi possível deletar a pessoa.'));
    }
}
