import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
//import 'rxjs/Rx';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }

  chartData = new BehaviorSubject([]);
  chartDataFromAPI;

  getChartDataBehaviorSubject(){
    return this.chartData.asObservable();
  }

  getSingleChartData(id){
    var sub = this.http.get('assets/ChartData.json').subscribe((data)=>{
      this.chartDataFromAPI = data;
      this.chartData.next(this.chartDataFromAPI);
    })
    return this.chartData.asObservable();
  }
}
