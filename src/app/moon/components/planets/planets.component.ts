import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DataService } from '../../services/data.service';
import { Destination } from '../../pages/interfaces/dataMoon.interfaces';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements AfterViewInit {
  @Input() currentPlanet!: Destination;
  @ViewChildren('planetsLi') planetsLi!: QueryList<ElementRef>;

  navPlanets = [
    { name: 'Moon' },
    { name: 'Mars' },
    { name: 'Europa' },
    { name: 'Titan' },
  ];

  /* first go event, next get Data */
  sendEvent(planet: string) {
    this.planetsLi.forEach((planetLi, index, arreglo) => {
      /* validacion para obtener la referencia correcta gracias al texto incluido */
      if (
        planetLi.nativeElement.innerText.toLowerCase() == planet.toLowerCase()
      ) {
        /* tomo el arreglo para borrar a las demás la clase planetActive en caso la tengan */
        arreglo.forEach((allPlanets) =>
          allPlanets.nativeElement.classList.remove('planetActive')
        );
        /* agrego la clase al elemento que corresponde */
        planetLi.nativeElement.classList.add('planetActive');
      }
    });
    this.dataService.setName = planet.toLowerCase();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.planetsLi.first.nativeElement.classList.add('planetActive');
    }, 10);
  }
  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}
}
