import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent, data: { title: 'Contact List'}
  },
  {
    path: '', redirectTo: '/contact', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
