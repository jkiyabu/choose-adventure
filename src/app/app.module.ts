import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CareersComponent } from './careers/careers.component';
import { CareerDetailsComponent } from './career-details/career-details.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { UserAddComponent } from './user-add/user-add.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { UserService }          from './user.service';
import { CareerService }          from './career.service';
import { EditUserComponent } from './edit-user/edit-user.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CareersComponent,
    CareerDetailsComponent,
    BankAccountComponent,
    UserAddComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [UserService, CareerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
