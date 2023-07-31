import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Crew } from '../interfaces/dataMoon.interfaces';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  crewData: Crew[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getCrew().subscribe((result) => {
      this.crewData = result;
    });
  }
}
