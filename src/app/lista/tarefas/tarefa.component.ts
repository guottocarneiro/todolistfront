import { Component, Input } from "@angular/core";

import { Tarefa } from "./tarefa";

@Component({
    selector: 'tl-tarefa',
    templateUrl: './tarefa.component.html'
})
export class TarefaComponent {

    @Input() tarefas: Tarefa[] = [];

}