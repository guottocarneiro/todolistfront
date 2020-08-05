import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule }  from '@angular/forms';

import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login/login.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ LoginComponent ],
    exports: [ LoginComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
     ],
     providers: [
         LoginService
     ]
})
export class UsuarioModule {

}