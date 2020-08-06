import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule }  from '@angular/forms';

import { LoginComponent } from "./login/login.component";
import { UsuarioService } from "./usuario.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CadastroUsuarioComponent } from "./cadastro-usuario/cadastro-usuario.component";

@NgModule({
    declarations: [ LoginComponent, CadastroUsuarioComponent ],
    exports: [ LoginComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
     ],
     providers: [
         UsuarioService
     ]
})
export class UsuarioModule {

}