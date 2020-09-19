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
  dataforChart;
  id;
  chart:any;
  constructor(private chartService:ChartService, private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log('id for chart:'+this.id);

    this.chartService.getSingleChartData(this.id).subscribe((data)=>{
      this.allDataForChart = data;
      console.log('allDataforchart:'+JSON.stringify(this.allDataForChart));
      console.log(this.allDataForChart.length)
      if(this.id<=Object.keys(this.allDataForChart).length)
        {this.dataforChart = this.allDataForChart[`${this.id}`] as any[];
        console.log('Current data for chart'+this.dataforChart);
      }
      else
        this.dataforChart = this.allDataForChart['1'] as any[];
    })

    this.chartService.getChartDataBehaviorSubject().subscribe((data)=>{
      this.allDataForChart = data;
      if(this.id<=Object.keys(this.allDataForChart).length)
      {
        this.dataforChart = this.allDataForChart[`${this.id}`];
      }
      else
        this.dataforChart = this.allDataForChart['1'];

      this.updateChartData(this.chart,this.dataforChart,0);
    })
    
  }
  
  ngAfterViewInit(): void {
    var ctx = this.myChart.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Analytics Score',
            backgroundColor: 'rgb(255, 166, 77)', //'rgb(255, 99, 132)',
            borderColor: 'rgb(0, 0, 102)',//'rgb(255, 99, 132)',
            //data: [0, 10, 5, 2, 20, 30, 45]
            data: this.dataforChart,
            fill: true
        }]
    },

    // Configuration options go here
    options: {}
});
console.log('chart:',this.chart);
  }

  updateChartData(chart,dataforChart,dataSetIndex){
    if(chart==null || chart=='undefined'){}
    else{
    chart.data.datasets[dataSetIndex].data = dataforChart;
    chart.update();
  }

  }


  

}
