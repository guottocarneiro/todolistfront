import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { UsuarioService } from "./usuario.service";
import { CadastroUsuarioComponent } from "./cadastro-usuario/cadastro-usuario.component";
import { ListaModule } from "../lista/lista.module";

@NgModule({
    declarations: [ LoginComponent, CadastroUsuarioComponent ],
    exports: [ LoginComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        ListaModule
     ],
     providers: [
         UsuarioService
     ]
})
export class UsuarioModule {

}