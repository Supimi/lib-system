import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponentComponent} from './components/home-page-component/home-page-component.component';
import {AddItemPageComponent} from './components/add-item-page/add-item-page.component';
import {AddBookComponentComponent} from './components/add-book-component/add-book-component.component';
import {AddCDComponentComponent} from './components/add-cdcomponent/add-cdcomponent.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponentComponent
  },
  {
    path: 'item',
    component: AddItemPageComponent,
  },
  {
    path: 'add-book',
    component: AddBookComponentComponent
  },
  {
    path: 'add-cd',
    component: AddCDComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
