import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private elm: ElementRef) {
  }

  @HostListener('mouseover') onMouseOver(): void{
    this.hoverMe();
  }

  @HostListener('mouseout') onMouseOut(): void{
    this.hoverMeOut();
  }


// hoverTag(): void{
//     this.elm.nativeElement.style.fontWeight = 'bold';
//     //console.log("jacob")
// }

  hoverMe(): void{
 if (this.elm.nativeElement.localName === 'h1') {
   this.elm.nativeElement.style.textDecoration = 'underline';
 } else {
   this.elm.nativeElement.style.fontWeight = 'bold';
 }
    console.log(this.elm.nativeElement.localName);
  }

  hoverMeOut(): void{
    if (this.elm.nativeElement.localName === 'h1') {
      this.elm.nativeElement.style.textDecoration = '';
    } else {
      this.elm.nativeElement.style.fontWeight = '';
    }
    //console.log("up");
  }

}
