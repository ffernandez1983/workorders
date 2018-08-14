import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {WorkOrder} from '../_model/workOrder';
import {WorkOrdersService} from '../_services/workOrders.service';
//import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'work-orders-list',
  templateUrl: './workOrdersList.component.html',
  styleUrls: ['./workOrdersList.component.css']
})

export class WorkOrdersListComponent {
    
  displayedColumns = ['id', 'date', 'total', 'description'];
  
  workOrders:WorkOrder[];

  dataSource: MatTableDataSource<WorkOrder>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private workOrderService:WorkOrdersService, private router:Router ) {
    this.getWorkOrders();
    
  }

  public getWorkOrders(){
     this.workOrderService.getWorkOrders()
      .subscribe(data => {
        this.loadData(data);
      });            
  }
  public loadData(data){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;   
  }

  public onSelect(workorder){
    this.router.navigate(['/workorders', workorder.id]);   
  }

}