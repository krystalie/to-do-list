import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { StoreModule } from '@ngrx/store';
//import store to set store throughout
import { EffectsModule } from '@ngrx/effects';

import { ListEffects } from './list.effects'
import { ListReducer } from './list.reducer';

//import reducer function 



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule,
	StoreModule.forRoot({'task' : ListReducer}),
	AngularFireModule.initializeApp(environment.firebase),
	AngularFirestoreModule,
	EffectsModule.forRoot([ListEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
