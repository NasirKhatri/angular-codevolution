import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]',
  host: {
    '(click)': 'applyLogic()'
  }
})
export class HighlightColorDirective {

  @Input() number = 0;
  @Input() divisibleBy = 1;
  private el: ElementRef;

  constructor(el: ElementRef) { 
    this.el = el;
  }

  applyLogic() {
    if(this.number % this.divisibleBy === 0 ) {
      this.el.nativeElement.style.color = 'green';
      this.el.nativeElement.style.fontSize = '72px';
    } else {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.fontSize = '72px';
    }
  }
}
