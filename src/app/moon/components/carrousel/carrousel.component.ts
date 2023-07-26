import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Crew } from '../../pages/interfaces/dataMoon.interfaces';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent implements OnInit {
  crewData: Crew[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getCrew().subscribe((result) => {
      this.crewData = result;
      console.log(this.crewData);
    });
  }
}
