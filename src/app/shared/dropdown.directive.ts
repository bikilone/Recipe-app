import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen = false;

  @HostListener("click") onclick() {
    this.isOpen = !this.isOpen;
  }
  constructor(private element: ElementRef) {}
}
