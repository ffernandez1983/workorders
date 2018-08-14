//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { WorkOrdersListComponent }   from './workOrdersList/workOrdersList.component';
import { WorkOrderDetailComponent }   from './workOrderDetail/workOrderDetail.component';
import { LoginComponent } from './login/login.component';


//Services
import {WorkOrdersService} from './_services/workOrders.service';
import {ClientService} from './_services/client.service';
import {LoginService} from './_services/login.service';

//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    WorkOrdersListComponent,
    WorkOrderDetailComponent,
    LoginComponent
  ],

  //CUIDADO IMPORTA EL ORDEN!!!
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule

  ],
  providers: [WorkOrdersService, ClientService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
