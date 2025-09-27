import { Routes } from '@angular/router';
import {Challenge1Component} from './challenges/challenge1-component/challenge1-component';

export const routes: Routes = [
  { path: '', redirectTo: '/challenge1', pathMatch: 'full'},
  { path: 'challenge1', component: Challenge1Component }
];
