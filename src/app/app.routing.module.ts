import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./usuario/login/login.component";
import { CadastroUsuarioComponent } from "./usuario/cadastro-usuario/cadastro-usuario.component";
import { ListaComponent } from "./lista/lista.component";
import { CadastroTarefaComponent } from "./lista/cadastro-tarefa/cadastro-tarefa.component";
import { ListaDetalhesComponent } from "./lista/lista-detalhes/lista-detalhes.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { LoginGuard } from "./core/auth/login.guard";
import { CadastroListaComponent } from "./lista/cadastro-lista/cadastro-lista.component";
import { EditarTarefaComponent } from "./lista/editar-tarefa/editar-tarefa.component";

const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LoginComponent,
        canActivate: [LoginGuard],
        data: {
            title: 'Login'
        }
    },
    {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent,
        canActivate: [LoginGuard],
        data: {
            title: 'Cadastro Usuário'
        }
    },
    {
        path: 'lista',
        component: ListaComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'To Do List'
        }
    },
    {
        path: 'lista/cadastro',
        component: CadastroListaComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Cadastro Lista'
        }
    },
    {
        path: 'lista/:idLista',
        component: ListaDetalhesComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'To Do List'
        }
    },
    {
        path: 'lista/:idLista/tarefa',
        component: CadastroTarefaComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Cadastro Tarefa'
        }
    },
    {
        path: 'lista/:idLista/tarefa/:idTarefa',
        component: EditarTarefaComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Editar Tarefa'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}