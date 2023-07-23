import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoonRoutingModule } from './moon-routing.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PersonsComponent } from './components/persons/persons.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    PrincipalPageComponent,
    PlanetsComponent,
    PersonsComponent,
    TechnologiesComponent,
  ],
  imports: [CommonModule, MoonRoutingModule],
})
export class MoonModule {}
