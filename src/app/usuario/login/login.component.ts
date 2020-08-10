import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { UsuarioLogin } from "../usuario-login";
import { UsuarioService } from "../usuario.service";
import { Usuario } from "../usuario";
import { ListaService } from "src/app/lista/lista.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    
    loginForm: FormGroup;
    idLista: number = 0;

    constructor(
        private usuarioService: UsuarioService,
        private formBuilder: FormBuilder,
        private router: Router,
        private listaService: ListaService
        ) {}
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group ({
            loginUsuario: [''],
            senhaUsuario: ['']
        });
    }

    login() {
        const loginUser = this.loginForm.getRawValue() as UsuarioLogin;
        
        this.usuarioService
            .login(loginUser)
            .subscribe( (usuario: Usuario) => {
                if(this.usuarioService.getUsuario())
                {
                    this.router.navigate(['lista']);
                } else {
                    this.usuarioService.setUsuario(usuario);                  
                    this.router.navigate(['lista']);
                }
                });                                
    }
}