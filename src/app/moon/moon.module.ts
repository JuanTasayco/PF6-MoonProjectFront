import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoonRoutingModule } from './moon-routing.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
  ],
  imports: [CommonModule, MoonRoutingModule],
})
export class MoonModule {}
