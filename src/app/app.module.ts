import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { RegistrationFormComponent } from './Pages/registration-form/registration-form.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './Pages/dash/dash.component';
import { FormComponent } from './Pages/form/form.component';
import { FormlistComponent } from './Pages/formlist/formlist.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SitesComponent } from './Pages/sites/sites.component';
import { PrivateGroupsComponent } from './Pages/private-groups/private-groups.component';
import { GroupListComponent } from './Pages/group-list/group-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationFormComponent,
    MainlayoutComponent,
    DashComponent,
    FormComponent,
    FormlistComponent,
    SitesComponent,
    PrivateGroupsComponent,
    GroupListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
