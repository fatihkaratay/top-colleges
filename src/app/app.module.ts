import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig={
    apiKey: "AIzaSyDrVHimUBZbRjw4k1CqfPVrvC8R-rBA4CU",
    authDomain: "colleges-bcf01.firebaseapp.com",
    databaseURL: "https://colleges-bcf01.firebaseio.com",
    storageBucket: "colleges-bcf01.appspot.com",
    messagingSenderId: "27319407261"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
