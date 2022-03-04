import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { BelfoldiUtakComponent } from './components/belfoldi-utak/belfoldi-utak.component';
import { KulfoldiUtakComponent } from './components/kulfoldi-utak/kulfoldi-utak.component';
import { FooterComponent } from './components/footer/footer.component';
import { TravelCardComponent } from './components/travel-card/travel-card.component';
import { ForintPipe } from './pipes/forint.pipe';
import { TravelListComponent } from './components/travel-list/travel-list.component';
import { LengthcutPipe } from './pipes/lengthcut.pipe';
import { TravelFormComponent } from './components/travel-form/travel-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelDetailsComponent } from './components/travel-details/travel-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FovarosiTurakComponent } from './components/fovarosi-turak/fovarosi-turak.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BelfoldiUtakComponent,
    KulfoldiUtakComponent,
    FooterComponent,
    TravelCardComponent,
    ForintPipe,
    TravelListComponent,
    LengthcutPipe,
    TravelFormComponent,
    TravelDetailsComponent,
    FilterPipe,
    FovarosiTurakComponent,
    CarouselComponent,
    ContactsComponent,
    LoginFormComponent,
    RegFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
