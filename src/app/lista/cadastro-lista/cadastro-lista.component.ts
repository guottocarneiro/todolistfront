import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { UsuarioService } from "src/app/usuario/usuario.service";
import { CadastroLista } from "./cadastro-lista";
import { ListaService } from "../lista.service";

@Component({
    templateUrl: './cadastro-lista.component.html'
})
export class CadastroListaComponent implements OnInit {

    cadastroListaForm: FormGroup;
    idUsuarioLocalStorage: number = 0;
    
    constructor(
        private listaService: ListaService,
        private router: Router,
        private formBuilder: FormBuilder,
        private usuarioService: UsuarioService
    ) {  }

    ngOnInit(): void {
        this.cadastroListaForm = this.formBuilder.group({
            Nome: ['']
        });

        this.idUsuarioLocalStorage = this.usuarioService.getUsuario().id;
    }

    cadastro() {
        const lista = this.cadastroListaForm.getRawValue() as CadastroLista;

        lista.IdUsuario = this.idUsuarioLocalStorage;

        this.listaService.cadastroLista(lista)
            .subscribe(() => {
                this.router.navigate(['/lista']);
            });       
    }
}