import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  constructor( private auth: AuthService,
                private router: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }
  Login (form: NgForm){
    if(form.invalid){return}

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    
    this.auth.Login(this.usuario).subscribe(resp => {
      
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');

    }, (err) => {
      console.log(err.error.error.message);
      
      Swal.fire({
        icon: 'error',
        title:'Error al autenticar',
        text:err.error.error.message

      });

    })

  }
}