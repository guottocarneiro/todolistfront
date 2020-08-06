import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./usuario/login/login.component";
import { CadastroUsuarioComponent } from "./usuario/cadastro-usuario/cadastro-usuario.component";
import { ListaComponent } from "./lista/lista.component";

const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent,
        data: {
            title: 'Cadastro Usuário'
        }
    },
    {
        path: 'lista',
        component: ListaComponent,
        data: {
            title: 'To Do List'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}