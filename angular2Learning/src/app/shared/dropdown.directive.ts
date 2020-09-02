import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit, OnDestroy{
 @HostBinding('class.open') isOpen = false;
  constructor(private _elementRef: ElementRef, private renderer : Renderer2) { 
      
     }
   
  ngOnInit() {
    
   }
   
   
   @HostListener('click') toggleOpen() {
     this.isOpen = !this.isOpen;
   }
   
   ngOnDestroy() {
   }
}
