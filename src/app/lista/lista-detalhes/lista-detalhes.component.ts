import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Tarefa } from "../tarefas/tarefa";
import { ListaService } from "../lista.service";

@Component({
    templateUrl: './lista-detalhes.component.html'
})
export class ListaDetalhesComponent implements OnInit{
    
    idLista: number = 0;
    tarefas: Tarefa[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private listaService: ListaService
    ) {}
    
    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.idLista = params.idLista;
        });

        this.listaService.tarefasFromList(this.idLista)
        .pipe()
        .subscribe((_tarefas) => { 
            console.log(_tarefas);
            this.tarefas = _tarefas;
    });
    }



}