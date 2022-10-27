import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { ListeComponent } from './liste/liste.component';

import { listeService } from './services/liste.service';
import { ListeViewComponent } from './liste-view/liste-view.component';
import { SingleVilleComponent } from './single-ville/single-ville.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditVilleComponent } from './edit-ville/edit-ville.component';

const appRoutes: Routes = [
  {path: 'carte', component: CarteComponent },
  {path: 'liste', component: ListeViewComponent },
  {path: 'liste/:id', component: SingleVilleComponent},
  {path: 'edit', component: EditVilleComponent},
  {path: '', component: CarteComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    ListeViewComponent,
    SingleVilleComponent,
    FourOhFourComponent,
    EditVilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    listeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
