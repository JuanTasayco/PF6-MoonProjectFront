import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Destination } from '../interfaces/dataMoon.interfaces';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  planetFilter!: Destination;

  ngOnInit(): void {
    this.dataService.getName
      .pipe(
        switchMap((name) =>
          this.dataService
            .getDestinations()
            .pipe(
              map((result) =>
                result.filter((planets) => planets.name.toLowerCase() == name)
              )
            )
        )
      )
      .subscribe((planet) => {
        this.planetFilter = planet[0];
      });
  }

  constructor(private dataService: DataService) {}
}
