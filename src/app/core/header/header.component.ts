import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { Usuario } from "src/app/usuario/usuario";
import { UsuarioService } from "src/app/usuario/usuario.service";


@Component({
    selector: 'tl-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<Usuario>;
    user: Usuario;

    constructor(
        private userService: UsuarioService,
        private router: Router
    ) { 
        this.user$ = this.userService.getUsuarioObservable();
        this.user = this.userService.getUsuario();
    }

    logout() {
        this.user = null;
        this.userService.logout();
        this.router.navigate(['']);
    }
}