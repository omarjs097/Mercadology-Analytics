import { Component, OnInit } from '@angular/core';
import { empresa } from '../../models/empresa';
import { EmpresaService } from '../../services/empresa.service';
import { Global } from '../../services/global';
@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css'],
  providers: [EmpresaService]
})
export class CuentasComponent implements OnInit {
      public title: String;
      public empresa: empresa;
      public url: String;



  constructor(
    private EmpresaService: EmpresaService
  ) { 
    this.url = Global.url;
    this.title = "Cuentas Mercadology";
		this.empresa = new empresa('','','','','','','','','','','','','','','','','','','','','','','');
  }
  
  ngOnInit(): void {
  	this.getEmpresas();

  }
  getEmpresas(){
  	this.EmpresaService.getEmpresas().subscribe(
  		response => {
  			if(response.empresa){
  				this.empresa = response.empresa;
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
    );
  }
  onSubmit(form){
		
		// Guardar datos básicos
		this.EmpresaService.saveEmpresa(this.empresa).subscribe(
			response => {
				console.log(response);
				
			},
			error => {
				console.log(<any>error);
			}
		);
  }
 /*
	getProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'project/'+id, {headers: headers});
	}

	deleteProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'project/'+id, {headers: headers});
	}

	updateProject(project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'project/'+project._id, params, {headers: headers});
	}
*/
  

}
