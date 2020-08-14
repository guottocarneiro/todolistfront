import { Component, OnInit } from "@angular/core";

import { ListaService } from "./lista.service";
import { UsuarioService } from "../usuario/usuario.service";
import { Lista } from "./lista";


@Component({
    templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {
    
    listas: Lista[] = [];
    idUsuarioLocalStorage: number = 0;
    
    constructor(
        private listaService: ListaService,
        private usuarioService: UsuarioService
    ) {  }

    ngOnInit(): void {

        this.idUsuarioLocalStorage = this.usuarioService.getUsuario().id;

        this.listaService.getListaUsuario(this.idUsuarioLocalStorage)
            .subscribe((_listas: Lista[]) => {
                this.listas = _listas;
            })
    }
}