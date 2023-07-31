import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Crew } from '../../pages/interfaces/dataMoon.interfaces';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonsComponent implements OnInit {
  @Input() activePerson?: Crew;

  constructor() {}
  ngOnInit(): void {}
}
