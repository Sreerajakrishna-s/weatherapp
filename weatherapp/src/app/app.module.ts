import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WeatherdashboardComponent } from './weatherdashboard/weatherdashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    WeatherdashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCSnhBc__3EoRLnAn2nMpI-swtSZlV4gLE",
      authDomain: "my-weather-ce8dc.firebaseapp.com",
      projectId: "my-weather-ce8dc",
      storageBucket: "my-weather-ce8dc.appspot.com",
      messagingSenderId: "1071697035407",
      appId: "1:1071697035407:web:87348bd3afa84f9ba9b0fa",
      measurementId: "G-Q4PE9FZ33G"
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
