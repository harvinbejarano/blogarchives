import { Component, NgModule } from '@angular/core';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
    path: 'archive/:year/:month',
    loadChildren : './blog/blog.module#BlogModule'
  },
  {
    path: '**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
