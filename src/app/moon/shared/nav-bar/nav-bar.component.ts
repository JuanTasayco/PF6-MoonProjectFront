import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements AfterViewInit {
  /* close navBar menu */
  @ViewChild('navBarEl') navBarEl!: ElementRef<HTMLElement>;
  @ViewChild('buttonOpen') btnOpen!: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {}

  closeNavBar() {
    this.btnOpen.nativeElement.classList.add('z-[100]');
    gsap.to(this.navBarEl.nativeElement, {
      opacity: 0,
      duration: 1,
      xPercent: 100,
    });
  }
  openNavBar() {
    this.btnOpen.nativeElement.classList.remove('z-[100]');
    gsap.fromTo(
      this.navBarEl.nativeElement,
      {
        xPercent: '100',
        opacity: 0,
      },
      {
        xPercent: '0',
        opacity: 1,
      }
    );
  }

  @HostListener('window:resize', [])
  widthVw() {
    console.log(window.innerWidth);
    if (window.innerWidth < 640) {
      /*  this.navBarEl.nativeElement.classList.add('ocultar'); */
    } else {
      /*   this.navBarEl.nativeElement.classList.remove('ocultar'); */
    }
  }

  constructor() {}
}
