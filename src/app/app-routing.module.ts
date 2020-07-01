import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegGuardService } from './guards/reg-guard.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddGroupComponent } from './add-group/add-group.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "groups", component: GroupsComponent, canActivate: [RegGuardService] },
  { path: "contacts", component: ContactsComponent, canActivate: [RegGuardService] },
  { path: "addcontact", component: AddContactComponent },
  { path: "addgroup", component: AddGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
