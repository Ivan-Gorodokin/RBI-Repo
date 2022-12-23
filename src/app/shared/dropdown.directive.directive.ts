import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirectiveDirective {
  dropMenu: boolean;

  @HostBinding('class') menuClass: string;

  @HostListener('click') clicked(eventData: Event) {
    this.dropMenu = !this.dropMenu;
    this.dropMenu ? (this.menuClass = 'open') : (this.menuClass = '');
  }

  constructor() {}

  ngOnInit() {
    this.dropMenu = false;
  }
}
