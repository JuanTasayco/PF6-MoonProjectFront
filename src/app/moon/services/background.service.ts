import { TemplateBindingParseResult } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';

export interface Background {
  path: responsiveOptions;
  name: string;
}

interface responsiveOptions {
  mobile: string;
  tablet: string;
  desktop: string;
}

@Injectable({
  providedIn: 'root',
})
export class BackGroundService {
  private backgrounds: Background[] = [
    {
      path: {
        mobile: 'assets/home/background-home-mobile.jpg',
        tablet: 'assets/home/background-home-tablet.jpg',
        desktop: 'assets/home/background-home-desktop.jpg',
      },
      name: 'home',
    },
    {
      path: {
        mobile: 'assets/destination/background-destination-mobile.jpg',
        tablet: 'assets/destination/background-destination-tablet.jpg',
        desktop: 'assets/destination/background-destination-desktop.jpg',
      },
      name: 'destination',
    },
    {
      path: {
        mobile: 'assets/crew/background-crew-mobile.jpg',
        tablet: 'assets/crew/background-crew-tablet.jpg',
        desktop: 'assets/crew/background-crew-desktop.jpg',
      },
      name: 'crew',
    },
    {
      path: {
        mobile: 'assets/technology/background-technology-mobile.jpg',
        tablet: 'assets/technology/background-technology-tablet.jpg',
        desktop: 'assets/technology/background-technology-desktop.jpg',
      },
      name: 'technology',
    },
  ];

  obsBackground: Subject<string> = new Subject();

  set emitNameComponent(name: string) {
    this.obsBackground.next(name);
  }

  get getNameComponent(): Observable<Background | undefined> {
    return this.obsBackground.pipe(
      map((nameString) => {
        return this.backgrounds.find((result) => result.name == nameString);
      })
    );
  }

  constructor() {}
}
