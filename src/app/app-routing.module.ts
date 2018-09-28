import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path:'',component: LoginComponent , pathMatch: 'full' },
  { path:'login',component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'reset', component: ResetComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }