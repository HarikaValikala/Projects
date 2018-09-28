import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ResetComponent } from './reset/reset.component';
import { FormsComponent } from './forms/forms.component';
import { CanactivateGuard } from './canactivate.guard';
import { PipesComponent } from './pipes/pipes.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ResetComponent,
    FormsComponent,
    PipesComponent,
    DatabindingComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CanactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
