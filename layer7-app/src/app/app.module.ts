import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DevsComponent } from './devs/devs.component';

const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'devs', component: DevsComponent },
] as Routes;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    DevsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
