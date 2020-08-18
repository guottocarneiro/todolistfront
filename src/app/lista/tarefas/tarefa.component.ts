import { Component, Input } from "@angular/core";

import { Tarefa } from "./tarefa";
import { ListaService } from "../lista.service";
import { AlertService } from "src/app/core/alert/alert.service";

@Component({
    selector: 'tl-tarefa',
    templateUrl: './tarefa.component.html'
})
export class TarefaComponent {

    @Input() tarefas: Tarefa[] = [];

    constructor(
        private listaService: ListaService,
        private alertService: AlertService
    ) { }

    concluir(idTarefa: number) {
        this.listaService.trocarStatusTarefa(idTarefa)
            .subscribe(() => {
                const indiceTarefaAlterada = this.tarefas.map(x => x.id).indexOf(idTarefa);
                this.tarefas[indiceTarefaAlterada].status = !this.tarefas[indiceTarefaAlterada].status;
            });
    }

    deletar(idTarefa: number) {
        this.listaService.deleteTarefa(idTarefa)
            .subscribe(() => {
                const indiceTarefaExcluida = this.tarefas.map(x => x.id).indexOf(idTarefa);
                this.tarefas.splice(indiceTarefaExcluida,1);
                this.alertService.succes('Tarefa excluída!', true);
            });
    }

}