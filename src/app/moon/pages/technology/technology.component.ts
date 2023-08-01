import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Technology } from '../interfaces/dataMoon.interfaces';

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
  }
  constructor(private dataService: DataService) {}
}
