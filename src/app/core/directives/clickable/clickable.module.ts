import { NgModule } from "@angular/core";
import { ClickableDirective } from "./clickable.directive";

@NgModule({
    declarations: [ClickableDirective],
    exports: [ClickableDirective]
})
export class ClickableModule {

}