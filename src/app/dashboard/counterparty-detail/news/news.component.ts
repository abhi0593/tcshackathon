import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { NewsService } from 'src/app/services/news-service/news.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [];
  dataSource;
  ELEMENT_DATA;

  constructor(private counterPartyNewsService:NewsService) { 
    
  }

  ngOnInit(): void {
    this.counterPartyNewsService.getCounterPartyNews().subscribe(data=>{
      
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log('dataSource:'+JSON.stringify(data));
      this.dataSource.paginator = this.paginator;
            
      
    })
    this.displayedColumns = ['NewsHeader','PublishDateTime'];
  
  }

}
