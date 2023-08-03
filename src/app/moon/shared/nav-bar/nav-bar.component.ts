import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements AfterViewInit, OnInit {
  /* close navBar menu */
  @ViewChild('navBarEl') navBarEl!: ElementRef<HTMLElement>;
  @ViewChild('buttonOpen') btnOpen!: ElementRef<HTMLElement>;

  count: number = 0;
  ngAfterViewInit(): void {
    /* lo hago para evitar que al iniciar la vista en mobile, el navBar (con opacity 0) sobreponga la pagina y no se pueda seleccionar el texto o la animación del globo, esto se puede adornar con display:none también */
    if (window.innerWidth <= 640) {
      gsap.set(this.navBarEl.nativeElement, {
        opacity: 0,
        duration: 1,
        xPercent: 100,
      });
    }
  }

  closeNavBar() {
    this.btnOpen.nativeElement.classList.add('z-[100]');
    gsap.to(this.navBarEl.nativeElement, {
      opacity: 0,
      duration: 1,
      xPercent: 90,
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
    if (window.innerWidth >= 640) {
      gsap.to(this.navBarEl.nativeElement, {
        opacity: 1,
        xPercent: '0',
        clearProps: 'xPercent opacity',
      });
    } else {
      /*    gsap.to(this.navBarEl.nativeElement, {
        opacity: 0,
      }); */
      this.btnOpen.nativeElement.classList.remove('z-[100]');
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
