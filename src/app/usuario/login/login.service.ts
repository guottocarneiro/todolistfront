import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment'
import { UsuarioLogin } from "./usuario-login";

const API_LOGIN = environment.loginApi;

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(usuarioLogin: UsuarioLogin) {
        console.log(API_LOGIN + '/usuario/logar' + usuarioLogin);

        //JSON.stringify(usuarioLogin);

        return this.http.get(API_LOGIN + '/usuario/logar?' + usuarioLogin);
        //return this.http.get(API_LOGIN + '/usuario/logar?loginUsuario='+usuarioLogin.loginUsuario+'&senhaUsuario='+usuarioLogin.senhaUsuario);
    }

}