import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js';
import { ChartService } from 'src/app/services/chart-service/chart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @ViewChild('myChart') myChart:ElementRef;

  allDataForChart;
  dataforChart=[];
  id;
  constructor(private chartService:ChartService, private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.chartService.getSingleChartData(this.id).subscribe(data=>{
      this.allDataForChart = data;
      console.log('allDataforchart:'+JSON.stringify(this.allDataForChart));
      if(this.id<=3)
        {this.dataforChart = this.allDataForChart[`${this.id}`].split(',');
        console.log('Current data for chart'+this.dataforChart.split(','));
      }
      else
        this.dataforChart = this.allDataForChart['1'].split(',');
    })
    
  }
  
  ngAfterViewInit(): void {
    var ctx = this.myChart.nativeElement.getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Analytics Score',
            backgroundColor: 'rgb(255, 166, 77)', //'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            //data: [0, 10, 5, 2, 20, 30, 45]
            data: this.dataforChart
        }]
    },

    // Configuration options go here
    options: {}
});
  }


  

}
