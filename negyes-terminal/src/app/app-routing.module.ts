import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BelfoldiUtakComponent } from './components/belfoldi-utak/belfoldi-utak.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FovarosiTurakComponent } from './components/fovarosi-turak/fovarosi-turak.component';
import { HomeComponent } from './components/home/home.component';
import { KulfoldiUtakComponent } from './components/kulfoldi-utak/kulfoldi-utak.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { TravelDetailsComponent } from './components/travel-details/travel-details.component';
import { TravelFormComponent } from './components/travel-form/travel-form.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'belfoldi', component: BelfoldiUtakComponent },
  { path: 'kulfoldi', component: KulfoldiUtakComponent },
  { path: 'fovarosi', component: FovarosiTurakComponent },
  { path: 'admin', component: TravelListComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'reg', component: RegFormComponent },
  { path: 'admin/:id', component: TravelFormComponent },
  { path: 'details/:id', component: TravelDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
