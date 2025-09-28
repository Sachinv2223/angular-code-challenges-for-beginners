import {Routes} from '@angular/router';
import {Challenge1Component} from './challenges/challenge1-component/challenge1-component';
import {Challenge2Component} from './challenges/challenge2-component/challenge2-component';

export const routes: Routes = [
  {path: '', redirectTo: '/challenge1', pathMatch: 'full'},
  {path: 'challenge1', component: Challenge1Component},
  {path: 'challenge2', component: Challenge2Component},
];
