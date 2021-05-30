import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FridgeComponent } from './fridge/fridge.component';
import { CupboardComponent } from './cupboard/cupboard.component';
import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';
import { FormsModule } from '@angular/forms';
import { AddCaloriesService } from './addCalories.service';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FridgeComponent,
    CupboardComponent,
    CalorieTrackerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AddCaloriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
