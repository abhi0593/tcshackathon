import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { NewsService } from 'src/app/services/news-service/news.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute,private counterPartyNewsService:NewsService) { 
    
  }
  id:number;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.counterPartyNewsService.getCounterPartyNews(this.id).subscribe(data=>{
      
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
            
      
    })
    this.displayedColumns = ['NewsHeader','PublishDateTime'];
  
  }

}
