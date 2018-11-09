import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { AddItemPageComponent } from './components/add-item-page/add-item-page.component';
import { AddBookComponentComponent } from './components/add-book-component/add-book-component.component';
import { AddCDComponentComponent } from './components/add-cdcomponent/add-cdcomponent.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    AddItemPageComponent,
    AddBookComponentComponent,
    AddCDComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
