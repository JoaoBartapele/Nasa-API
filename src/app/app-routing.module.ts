import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsteroidsComponent } from './components/asteroids/asteroids.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FastestComponent } from './components/fastest/fastest.component';
import { AlertComponent } from './components/alert/alert.component';
import { NewAlertComponent } from './components/new-alert/new-alert.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'asteroids',
    component: AsteroidsComponent
  },
  {
    path: 'asteroids/fastest',
    component: FastestComponent
  },
  {
    path: 'alert',
    component: AlertComponent,
    children: [
      {
        path: 'new',
        component: NewAlertComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
