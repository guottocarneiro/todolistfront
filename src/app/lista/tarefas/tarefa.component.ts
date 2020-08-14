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

    concluir(idTarefa: number, idLista: number) {
        this.listaService.concluirTarefa(idTarefa)
            .subscribe(() => {
                const indiceTarefaAlterada = this.tarefas.map(x => x.Id).indexOf(idTarefa);
                console.log(indiceTarefaAlterada);
                this.tarefas[indiceTarefaAlterada].Status = true;
                //this.router.navigate(['/lista', idLista]);
            });
    }

    deletar(idTarefa: number, idLista: number) {
        this.listaService.deleteTarefa(idTarefa)
            .subscribe(() => {
                const indiceTarefaExcluida = this.tarefas.map(x => x.Id);
                console.log(indiceTarefaExcluida);
                //this.tarefas.splice(indiceTarefaExcluida,1);
                //this.router.navigate(['/lista', idLista]);
            });
    }

}