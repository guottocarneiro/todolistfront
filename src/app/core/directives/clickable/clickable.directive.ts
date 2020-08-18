import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
    selector: '[makeClickable]'
})
export class ClickableDirective {

    constructor(
        private el: ElementRef,
        private render: Renderer
    ) {  }

    @HostListener('mouseover')
    clickable() {
        this.render.setElementStyle(this.el.nativeElement, 'cursor','pointer');
    }

}