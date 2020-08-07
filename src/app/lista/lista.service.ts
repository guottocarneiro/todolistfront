import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from '../../environments/environment';
import { Tarefa } from "./tarefas/tarefa";

const API = environment.todolistApi;


@Injectable()
export class ListaService {

    constructor (
        private http: HttpClient
    ) { }

    tarefasFromList(idLista: number) {    
        return this.http.get<Tarefa[]>(API + '/lista/listas/' + idLista);
    }

}