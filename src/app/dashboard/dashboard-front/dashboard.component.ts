import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CounterPartyAnalyticsService } from '../../services/counter-party-analytics.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = [];
  dataSource;
  ELEMENT_DATA;

  constructor(private counterPartyAnalyticsService:CounterPartyAnalyticsService) { 
    
  }

  ngOnInit(): void {
    this.counterPartyAnalyticsService.getCounterPartyData().subscribe(data=>{
      
      this.ELEMENT_DATA = data['CounterParties'];
      console.log('data:'+data);
      console.log('Element_Data:'+this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
            
      
    })
    this.displayedColumns = ['Counterparty', 'UltimateParentCounterParty', 'BanLegalEntity', 'MTMNet','CVA','NewsAnalyticsScore','PredictedProbablity','CreditRating','LastRefreshTime'];    
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

}



