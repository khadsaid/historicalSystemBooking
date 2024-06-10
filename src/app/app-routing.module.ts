import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './Pages/registration-form/registration-form.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { DashComponent } from './Pages/dash/dash.component';
import { FormComponent } from './Pages/form/form.component';
import { SitesComponent } from './Pages/sites/sites.component';
import { FormlistComponent } from './Pages/formlist/formlist.component';
import { PrivateGroupsComponent } from './Pages/private-groups/private-groups.component';
import { GroupListComponent } from './Pages/group-list/group-list.component';





const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'register', component:RegistrationFormComponent},
  // {path:'mainlayout',component:MainlayoutComponent,
 
  // },

  {path:'dash',component:DashComponent,
  children:[{
    path:'form',component:FormComponent
  },
     {path:'sites',component:SitesComponent

     },
    {path:'private_groups',component:PrivateGroupsComponent},
    {path:'group_list', component:GroupListComponent},


     {path:'formlist',component:FormlistComponent},]
  },
    
    
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
