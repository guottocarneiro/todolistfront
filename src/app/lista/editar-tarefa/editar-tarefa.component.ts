import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { ListaService } from "../lista.service";
import { Tarefa } from "../tarefas/tarefa";
import { AlertService } from "src/app/core/alert/alert.service";

@Component({
    templateUrl: './editar-tarefa.component.html'
})
export class EditarTarefaComponent implements OnInit {

    editarTarefaForm: FormGroup;
    idTarefa: number = 0;
    idLista: number = 0;
    tarefa: Tarefa = null;
    teste: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private listaService: ListaService,
        private router: Router,
        private alertService: AlertService
        ) {  }
    
    ngOnInit(): void {

        this.activatedRoute.params.subscribe(params => {
            this.idTarefa = params.idTarefa;
            this.idLista = params.idLista;
        });

        this.editarTarefaForm = this.formBuilder.group({
            Nome: [''],
            Descricao: ['']
        });

        this.listaService.getTarefa(this.idLista, this.idTarefa)
            .subscribe((_tarefa: Tarefa) => {
                this.editarTarefaForm.setValue({Nome: _tarefa.nome, Descricao: _tarefa.descricao});
                this.tarefa = _tarefa;
        });                
    }
    
    editar() {
        this.tarefa.nome = this.editarTarefaForm.get('Nome').value;
        this.tarefa.descricao = this.editarTarefaForm.get('Descricao').value;

        this.listaService.editarTarefa(this.tarefa)
            .subscribe(() => {
                this.alertService.succes('Tarefa alterada!', true);
                this.router.navigate(['/lista',this.idLista]);
            });
    }

}