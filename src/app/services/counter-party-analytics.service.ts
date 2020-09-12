import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterPartyAnalyticsService {

  constructor(private http:HttpClient) { }

  getCounterPartyData(){
    return this.http.get('assets/CounterPartyAnalytics.json');
  }
}
