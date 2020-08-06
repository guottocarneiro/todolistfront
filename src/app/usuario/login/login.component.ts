import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { UsuarioLogin } from "./usuario-login";
import { UsuarioService } from "../usuario.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    
    loginForm: FormGroup;

    constructor(
        private usuarioService: UsuarioService,
        private formBuilder: FormBuilder,
        private router: Router
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
            .subscribe( (usuario) => {
                console.log(usuario);
                this.router.navigate(['lista']);
            });
    }
}