import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'moon',
    loadChildren: () => import('./moon/moon.module').then((m) => m.MoonModule),
  },
  {
    path: '**',
    redirectTo: 'moon',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
