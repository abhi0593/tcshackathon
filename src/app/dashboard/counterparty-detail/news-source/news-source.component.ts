import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { NewsSourcesService } from 'src/app/services/news-sources/news-sources.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-news-source',
  templateUrl: './news-source.component.html',
  styleUrls: ['./news-source.component.css']
})
export class NewsSourceComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [];
  dataSource;
  ELEMENT_DATA;

  constructor(private newsSourcesService:NewsSourcesService) { 
    
  }

  ngOnInit(): void {
    this.newsSourcesService.getNewsSourceForCounterParty().subscribe(data=>{
      
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
            
      
    })
    this.displayedColumns = ['Source','Type','Geography','NegativeArticle','TotalScore','LastReferred'];
  
  }

}
