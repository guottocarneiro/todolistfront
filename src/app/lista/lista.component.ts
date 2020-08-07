import { Component, OnInit } from "@angular/core";

import { ListaService } from "./lista.service";
import { Tarefa } from "./tarefas/tarefa";

@Component({
    templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {
    
    tarefas: Tarefa[] = [];
    
    constructor(
        private listaService: ListaService
    ) {  }

    ngOnInit(): void {
        this.listaService.tarefasFromList(1)
            .subscribe((_tarefas) => { 
                this.tarefas = _tarefas;
            });
    }

    
}