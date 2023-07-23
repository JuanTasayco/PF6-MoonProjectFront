import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent {
  currentData: any = {};

  /* first go event, next get Data */
  sendEvent(clickEvent: Event) {
    this.dataService.setEvent = clickEvent;
  }

  getData() {
    this.dataService.dataProject().subscribe((data) => {
      console.log(data);
    });
  }

  constructor(private dataService: DataService) {}
}
