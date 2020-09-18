import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }

  getSingleChartData(id){
    return this.http.get('assets/ChartData.json');
  }
}
