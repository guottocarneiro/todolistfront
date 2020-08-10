import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { TarefaComponent } from "./tarefas/tarefa.component";
import { ListaService } from "./lista.service";
import { ListaComponent } from "./lista.component";
import { CadastroTarefaComponent } from "./cadastro-tarefa/cadastro-tarefa.component";
import { ListaDetalhesComponent } from "./lista-detalhes/lista-detalhes.component";
import { CadastroListaComponent } from "./cadastro-lista/cadastro-lista.component";

@NgModule({
    declarations: [ ListaComponent, TarefaComponent, CadastroTarefaComponent, ListaDetalhesComponent, CadastroListaComponent ],
    exports: [  ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [ ListaService ]
})
export class ListaModule {

}