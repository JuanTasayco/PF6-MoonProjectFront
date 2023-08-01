import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Technology } from '../../pages/interfaces/dataMoon.interfaces';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent implements OnInit, AfterViewInit {
  @ViewChildren('buttons') buttons!: QueryList<ElementRef>;
  @Input() technologies: Technology[] = [];
  currentTechnology?: Technology;

  constructor() {}

  ngOnInit(): void {
    this.currentTechnology = this.technologies[0];
    console.log(this.currentTechnology);
  }

  ngAfterViewInit(): void {
    this.buttons.first.nativeElement.classList.add('buttActive');
  }

  pressButton(pos: number) {
    this.currentTechnology = this.technologies[pos];
    this.changeImg();
    this.buttons.forEach((item, index, arreglo) => {
      if (index == pos) {
        arreglo.forEach((item) => {
          item.nativeElement.classList.remove('buttActive');
        });
        item.nativeElement.classList.add('buttActive');
      }
    });
  }

  /* changeBackground */
  @HostListener('window:resize', [])
  detectWindowSize() {
    this.changeImg();
  }

  currentBackground: string =
    'assets/technology/image-launch-vehicle-portrait.jpg';
  changeImg() {
    console.log(this.currentBackground);
    this.currentBackground =
      window.innerWidth <= 1200
        ? this.currentTechnology?.images.landscape ?? ''
        : this.currentTechnology?.images.portrait ?? '';
  }
}
