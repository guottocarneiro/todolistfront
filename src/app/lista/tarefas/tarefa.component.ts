import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Tarefa } from "./tarefa";
import { ListaService } from "../lista.service";

@Component({
    selector: 'tl-tarefa',
    templateUrl: './tarefa.component.html'
})
export class TarefaComponent {

    @Input() tarefas: Tarefa[] = [];

    constructor(
        private listaService: ListaService,
        private router: Router
    ) { }

    concluir(idTarefa: number) {
        this.listaService.concluirTarefa(idTarefa)
            .subscribe(() => {
                this.router.navigate(['/lista']);
            });
    }

    deletar(idTarefa: number) {
        this.listaService.deleteTarefa(idTarefa)
            .subscribe(() => {
                this.router.navigate(['/lista']);
            });
    }

}