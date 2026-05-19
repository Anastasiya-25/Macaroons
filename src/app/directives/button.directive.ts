import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[button]'
})
export class ButtonDirective implements OnInit {

  constructor(private btn: ElementRef, private rend: Renderer2) {

  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.rend.setStyle(this.btn.nativeElement, 'background', '#4411b0');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.rend.setStyle(this.btn.nativeElement, 'background', 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)');
  }

  ngOnInit(): void {
    this.rend.setStyle(this.btn.nativeElement, 'background', 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)');
  }
}
