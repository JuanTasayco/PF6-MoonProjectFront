import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Crew } from '../interfaces/dataMoon.interfaces';
import { BackGroundService } from '../../services/background.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  crewData: Crew[] = [];

  constructor(
    private dataService: DataService,
    private backgroundService: BackGroundService
  ) {}
  ngOnInit(): void {
    this.dataService.getCrew().subscribe((result) => {
      this.crewData = result;
    });

    /* emitiendo nombre para el home y obtener la sección en la que esto */
    this.backgroundService.emitNameComponent = 'crew';
  }
}
