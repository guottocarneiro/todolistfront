import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./usuario/login/login.component";

const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}