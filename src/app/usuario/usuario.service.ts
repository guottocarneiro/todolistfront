import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";

import { environment } from '../../environments/environment'
import { UsuarioLogin } from "./usuario-login";
import { LocalStorageService } from "../core/local-storage/local-storage.service";
import { Usuario } from "./usuario";


const API_LOGIN = environment.loginApi;

const KEY = 'usuario';

@Injectable()
export class UsuarioService {

    private userSubject = new BehaviorSubject<Usuario>(null);
    user: Usuario = null;

    constructor(
        private http: HttpClient,
        private localStorageService: LocalStorageService
        ) { }

    login(usuarioLogin: UsuarioLogin) {
        return this.http.post(API_LOGIN + '/usuario/logar',  usuarioLogin);
    }

    cadastro(usuario: UsuarioLogin) {
        return this.http.post(API_LOGIN + '/usuario/cadastro', usuario);
    }

    setUsuario(usuario: Usuario) {
        this.localStorageService.setToken(JSON.stringify(usuario), KEY);
        this.user = usuario;
        this.userSubject.next(this.user);
    }

    getUsuario() {
        return JSON.parse(this.localStorageService.getToken(KEY)) as Usuario;
    }

    getUsuarioObservable() {
        return this.userSubject.asObservable();
    }

    isLogged() {
        return this.localStorageService.hasToken(KEY);
    }

    logout() {
        this.localStorageService.removeToken(KEY);
        this.userSubject.next(null);
        this.user = null;
    }

}