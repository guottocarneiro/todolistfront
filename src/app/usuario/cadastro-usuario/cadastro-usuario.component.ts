import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { UsuarioService } from "../usuario.service";
import { Usuario } from "./usuario";


@Component({
    templateUrl: './cadastro-usuario.component.html'
})
export class CadastroUsuarioComponent implements OnInit{

    cadastroUsuarioForm: FormGroup;

    constructor(
        private usuarioService: UsuarioService,
        private formBuilder: FormBuilder,
        private router: Router
        ) {}

    ngOnInit(): void {
        
        this.cadastroUsuarioForm = this.formBuilder.group({
            loginUsuario: [''],
            senhaUsuario: ['']
        });
    }

    cadastro() {
        const loginUser = this.cadastroUsuarioForm.getRawValue() as Usuario;

        this.usuarioService.cadastro(loginUser)
            .subscribe(() => {
                this.router.navigate(['']);
            });
    }

}