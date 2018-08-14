import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { WorkOrderDetailComponent }   from './workOrderDetail/workOrderDetail.component';
import { WorkOrdersListComponent }   from './workOrdersList/workOrdersList.component';
import { LoginComponent } from './login/login.component';

 
const appRoutes: Routes = [    
  { path: 'login', component: LoginComponent },
  { path: 'workorders/:id', component: WorkOrderDetailComponent },
  { path: 'workorders', component: WorkOrdersListComponent },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: "**",   component: WorkOrdersListComponent },
];
 
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents =  [WorkOrderDetailComponent, WorkOrdersListComponent]