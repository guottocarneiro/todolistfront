import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListaComponent } from "./lista.component";
import { TarefaComponent } from "./tarefas/tarefa.component";
import { ListaService } from "./lista.service";

@NgModule({
    declarations: [ ListaComponent, TarefaComponent ],
    exports: [  ],
    imports: [ CommonModule ],
    providers: [ ListaService ]
})
export class ListaModule {

}