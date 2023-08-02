import { EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { BackGroundService } from '../../services/background.service';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PrincipalPageComponent implements OnInit {
  ngOnInit(): void {
    this.backgroundService.emitNameComponent = 'home';
  }

  constructor(private backgroundService: BackGroundService) {}
}
