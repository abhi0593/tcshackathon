import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterPartyAnalyticsService {

  constructor(private http:HttpClient) { }

  counterparties;


  getCounterPartyData(){
    return this.http.get('assets/CounterPartyAnalytics.json');
  }

  getSingleCounterParty(id:number){
    var subject = new Subject<string>();
    this.getCounterPartyData().subscribe(data=>{
      this.counterparties = data;
      console.log('counterparty:'+this.counterparties);
      console.log(this.counterparties[id].Id);
      subject.next(this.counterparties[id].Counterparty);      

    });
    return subject.asObservable();
    
  }

}
