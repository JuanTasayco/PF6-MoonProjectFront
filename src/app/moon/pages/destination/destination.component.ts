import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Destination } from '../interfaces/dataMoon.interfaces';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  destinations: Array<Destination> = [];

  ngOnInit(): void {
    this.dataService.dataProject().subscribe((data) => {});
  }

  constructor(private dataService: DataService) {}
}
