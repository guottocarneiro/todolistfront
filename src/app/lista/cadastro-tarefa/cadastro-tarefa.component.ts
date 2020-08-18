import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ListaService } from "../lista.service";
import { Tarefa } from "../tarefas/tarefa";
import { UsuarioService } from "src/app/usuario/usuario.service";
import { AlertService } from "src/app/core/alert/alert.service";

@Component({
    templateUrl: './cadastro-tarefa.component.html'
})
export class CadastroTarefaComponent implements OnInit {
    
    cadastroTarefaForm: FormGroup;
    idUsuarioLocalStorage: number = 0;
    idLista: number = 0;

    constructor(
        private listaService: ListaService,
        private usuarioService: UsuarioService,
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        this.cadastroTarefaForm = this.formBuilder.group({
            Nome: [''],
            Descricao: ['']
        });

        this.idUsuarioLocalStorage = this.usuarioService.getUsuario().id;
        
        this.activatedRoute.params.subscribe(params => {
            this.idLista = params.idLista;
        });
    }

    cadastro() {
        const tarefa = this.cadastroTarefaForm.getRawValue() as Tarefa;

        tarefa.status = false;
        tarefa.IdLista = this.idLista;

        this.listaService.cadastroTarefa(tarefa)
            .subscribe(() => {
                this.alertService.succes('Tarefa cadastrada', true);
                this.router.navigate(['/lista',this.idLista]);
            });       
    }
}