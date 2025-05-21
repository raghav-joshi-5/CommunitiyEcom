import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { NavbarheadComponent } from './shared/component/navbarhead/navbarhead.component';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './shared/component/login/login.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './shared/component/home/home.component';
import { ContactComponent } from './shared/component/contact/contact.component';
import { AboutComponent } from './shared/component/about/about.component';
import { CardComponent } from './shared/component/card/card.component';
import { TimerComponent } from './shared/component/timer/timer.component';
import { CarouselComponent } from './shared/component/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarheadComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CardComponent,
    TimerComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
