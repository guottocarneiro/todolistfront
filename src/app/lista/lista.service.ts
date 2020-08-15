import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from '../../environments/environment';
import { Tarefa } from "./tarefas/tarefa";
import { CadastroLista } from "./cadastro-lista/cadastro-lista";

const API = environment.todolistApi;


@Injectable()
export class ListaService {

    constructor (
        private http: HttpClient
    ) { }

    tarefasFromList(idLista: number) {    
        return this.http.get<Tarefa[]>(API + '/lista/' + idLista + '/tarefas');
    }

    cadastroTarefa(tarefa: Tarefa) {
        return this.http.post(API + '/lista/createtarefa', tarefa);
    }

    cadastroLista(lista: CadastroLista) {
        return this.http.post(API + '/lista/createlista', lista);
    }

    getListaUsuario(idUsuario: number) {
        return this.http.get(API + '/lista/' + idUsuario);
    }

    trocarStatusTarefa(idTarefa: number) {
        return this.http.post(API + '/lista/trocartarefa', idTarefa)
    }

    deleteTarefa(idTarefa: number) {
        return this.http.post(API + '/lista/deletetarefa', idTarefa)
    }

}