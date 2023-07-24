import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Destination } from '../../pages/interfaces/dataMoon.interfaces';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent {
  @Input() currentPlanet!: any;

  navPlanets = [
    { name: 'Moon' },
    { name: 'Mars' },
    { name: 'Europa' },
    { name: 'Titan' },
  ];

  /* first go event, next get Data */
  sendEvent(planet: string) {
    this.dataService.setName = planet.toLowerCase();
  }

  constructor(private dataService: DataService) {}
}
