import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UsuarioLogin } from "./usuario-login";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    
    loginForm: FormGroup;

    constructor(
        private loginService: LoginService,
        private formBuilder: FormBuilder
        ) {}
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group ({
            loginUsuario: [''],
            senhaUsuario: ['']
        });
    }

    login() {
        const loginUser = this.loginForm.getRawValue() as UsuarioLogin;
        this.loginService
            .login(loginUser)
            .subscribe( (usuario) => {
                console.log(usuario);
            });
    }
}