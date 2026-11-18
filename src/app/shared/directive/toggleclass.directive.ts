import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appToggleclass]'
})
export class ToggleclassDirective {
  private classAdded: boolean = false; 
  constructor(
    private elm: ElementRef,
    private renderer: Renderer2
  ) {}
  @Input() appToggleclass: string = 'show';
  @Input() target: 'NEXTSIBLING' | 'SELF' = 'SELF';
  @HostListener('click', ['$event']) clickEventListener(event: MouseEvent | KeyboardEvent): void {
    if (event?.preventDefault) event.preventDefault();
    const targetNativeElement = ('SELF' === this.target) ? this.elm.nativeElement : this.renderer.nextSibling(this.elm.nativeElement);
    if (this.classAdded) {
      // Hiding the Dropdown
      this.renderer.removeClass(targetNativeElement, this.appToggleclass);
    } else {
     // Showing the Dropdown
      this.renderer.addClass(targetNativeElement, this.appToggleclass);
    }
    this.classAdded = !this.classAdded;
  } 
}
