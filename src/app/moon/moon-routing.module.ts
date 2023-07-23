import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'principal', component: PrincipalPageComponent },
      {
        path: 'destination',
        component: DestinationComponent,
      },
      {
        path: 'crew',
        component: CrewComponent,
      },
      {
        path: 'technology',
        component: TechnologyComponent,
      },
      {
        path: '**',
        redirectTo: 'principal',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoonRoutingModule {}
