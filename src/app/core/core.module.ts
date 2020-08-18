import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
    declarations: [ HeaderComponent, MenuComponent, AlertComponent ],
    exports: [ HeaderComponent, AlertComponent ],
    imports: [ CommonModule, RouterModule  ]
})
export class CoreModule {

}