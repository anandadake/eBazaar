import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CitiesComponent } from './cities/cities.component';
import { StoresComponent } from './stores/stores.component';
import { CountersComponent } from './counters/counters.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    StoresComponent,
    CountersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,AngularFirestoreModule
  ],
  providers: [{provide : FirestoreSettingsToken,useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
