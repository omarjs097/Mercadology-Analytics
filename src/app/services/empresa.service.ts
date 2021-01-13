import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { empresa } from '../models/empresa';
import { Global } from './global';

@Injectable()
export class EmpresaService{
	public url: String;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de Angular';
	}

	saveEmpresa(empresa: empresa): Observable<any>{
		let params = JSON.stringify(empresa);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save_col', params, {headers: headers});
	}

	getEmpresas(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'all', {headers: headers});
	}
/*
	getEmpresaOne(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'empresa/'+id, {headers: headers});
	}

	deleteProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'empresa/'+id, {headers: headers});
	}

	updateProject(empresa): Observable<any>{
		let params = JSON.stringify(empresa);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'empresa/'+empresa._id, params, {headers: headers});
	}
*/
}