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
  ngAfterViewInit(): void {
    this.widthVw();
  }

  closeNavBar() {
    gsap.to(this.navBarEl.nativeElement, {
      xPercent: '0',
      duration: 1,
    });
  }
  openNavBar() {
    gsap.to(this.navBarEl.nativeElement, {
      xPercent: '-100',
    });
  }

  @HostListener('window:resize', [])
  widthVw() {
    console.log(window.innerWidth);
    if (window.innerWidth < 640) {
      this.navBarEl.nativeElement.classList.add('navBar');
    } else {
      this.navBarEl.nativeElement.classList.remove('navBar');
    }
  }

  constructor() {}
}
