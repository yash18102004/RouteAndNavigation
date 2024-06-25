import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Login1Component } from './login1/login1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:'', redirectTo:"login1",pathMatch:'full'},
  {path : 'home',component:DashboardComponent},
  {path : 'aboutus',component:AboutusComponent, canActivate: [AuthGuard]},
  {path : 'contactus',component:ContactusComponent},
  {path : 'login',component:LoginComponent},
  {path : 'login1',component:Login1Component}
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
    Login1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
