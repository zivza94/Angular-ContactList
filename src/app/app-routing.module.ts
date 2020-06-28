import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent,outlet:"popup"},
  { path: "groups", component: GroupsComponent },
  { path: "contacts", component: ContactsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
