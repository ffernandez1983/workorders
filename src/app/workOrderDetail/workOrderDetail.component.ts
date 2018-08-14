import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { WorkOrder } from '../_model/workOrder';
import { WorkOrdersService } from '../_services/workOrders.service';
import { map, startWith } from 'rxjs/operators';
import { ClientService } from '../_services/client.service';
import { Client } from '../_model/client';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'work-orders-detail',
  templateUrl: './workOrderDetail.component.html',
  styleUrls: ['./workOrderDetail.component.css']
})
export class WorkOrderDetailComponent implements OnInit {
//export class WorkOrderDetailComponent {
  myControl = new FormControl();
  optionsClients: string[] = [];
  filteredOptions: Observable<string[]>;
  workorderId: number;
  workorder$: Observable<WorkOrder>;
  client: Client;
  clients: Client[];
 
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workOrderService: WorkOrdersService,
    private clientService: ClientService,

    ) {
      
    }

  ngOnInit() {
    //this.client = new Client();
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.workorderId = id;
    this.getWorkOrder(this.workorderId.toString());
    this.clients = this.getClients();

    
     
    this.client = this.clients[1];
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
}
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsClients.filter(option => option.toLowerCase().includes(filterValue));
  }

  private getWorkOrder(id:string){
    this.workOrderService.getWorkOrderById(id)
     .subscribe(data => {
       this.loadData(data);
     });            
  }

  private getClients():Client[]{
    this.clientService.getClients()
    .subscribe(data=>{
      this.clients = data;
      
    });
    return this.clients;
  }

  public loadData(data){
    console.log(data);
  }

  public loadDataClient(data:Client[]){
    let i = 0;
    this.clients = data;
    data.forEach(element => {
      
      this.optionsClients[i] = element.name;
      i++;
    });
  }
  public loadClient(index:number){
    this.client = this.clients[index];
  }
     
  
}
