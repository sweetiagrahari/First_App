import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRedEll]',
  standalone: true
})
export class RedEllDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red";
   }

}
