import { Directive,  EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHoverD]'
})
export class HoverDDirective {
  @Output() isHover = new EventEmitter<boolean>()
  @HostListener('pointerenter' , ['$event']) hoverInto(){
    this.isHover.emit(true);
  }
  @HostListener('pointerleave' , ['$event']) hoverOut(){
    
    this.isHover.emit(false);
    
  }
  constructor() { }
  
}
