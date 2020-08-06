import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'
import { UsuarioLogin } from "./login/usuario-login";
import { Usuario } from "./cadastro-usuario/usuario";

const API_LOGIN = environment.loginApi;

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) { }

    login(usuarioLogin: UsuarioLogin) {
        //console.log(API_LOGIN + '/usuario/logar' + usuarioLogin);
        //?loginUsuario='+usuarioLogin.loginUsuario+'&senhaUsuario='+usuarioLogin.senhaUsuario
        return this.http.post(API_LOGIN + '/usuario/logar',  usuarioLogin);
    }

    cadastro(usuario: Usuario) {
        return this.http.post(API_LOGIN + '/usuario/cadastro', usuario);
    }

}