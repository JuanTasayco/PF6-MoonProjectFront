import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Technology } from '../interfaces/dataMoon.interfaces';
import { BackGroundService } from '../../services/background.service';

@Component({
  selector: 'app-tecnology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  technologyData: Technology[] = [];
  ngOnInit(): void {
    this.dataService.getTechnology().subscribe((data) => {
      this.technologyData = data;
    });

    this.backgroundService.emitNameComponent = 'technology';
  }
  constructor(
    private dataService: DataService,
    private backgroundService: BackGroundService
  ) {}
}
