import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DataService } from '../../services/data.service';
import { Crew } from '../../pages/interfaces/dataMoon.interfaces';
import { gsap } from 'gsap';
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent implements OnInit, AfterViewInit {
  @ViewChild('containerSlides') slides!: ElementRef<HTMLElement>;
  @ViewChildren('element') elements!: QueryList<ElementRef>;
  @ViewChild('element') element!: ElementRef<HTMLElement>;
  @ViewChildren('barButton') buttonsBar!: QueryList<ElementRef>;
  private lengthContainers: number = 0;
  @Input('persons') personsData: Crew[] = [];
  currentSlide: number = 0;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.lengthContainers = this.elements.length;
    this.buttonsBar.first.nativeElement.classList.add('act');

    setInterval(() => {
      this.next();
    }, 3000);
  }

  next() {
    this.currentSlide =
      (this.currentSlide + 1 + this.lengthContainers) % this.lengthContainers;
    this.moveContainerWithGsap(this.currentSlide);
    this.activeColorBarSlide();
  }

  prev() {
    this.currentSlide =
      (this.currentSlide - 1 + this.lengthContainers) % this.lengthContainers;
    this.moveContainerWithGsap(this.currentSlide);
    this.activeColorBarSlide();
  }

  moveContainerWithGsap(posSlide: number) {
    if (posSlide == this.lengthContainers - 1) {
      console.log('soy igualito czmare');
    }

    gsap.to(this.slides.nativeElement, {
      x: -posSlide * this.element.nativeElement.clientWidth,
      duration: 0.7,
      ease: 'power2.inOut',
    });
  }

  activeColorBarSlide() {
    this.buttonsBar.forEach((element, pos, contentArray) => {
      if (pos == this.currentSlide) {
        contentArray.forEach((elements) => {
          elements.nativeElement.classList.remove('act');
        });
        element.nativeElement.classList.add('act');
      }
    });
  }

  constructor(private dataService: DataService) {}
}
