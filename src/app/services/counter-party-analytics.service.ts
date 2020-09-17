import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterPartyAnalyticsService {

  constructor(private http:HttpClient) { }

  counterparties;


  getCounterPartyData(){
    // return this.http.get('assets/CounterPartyAnalytics.json');
    var subject = new BehaviorSubject<any>({});
    this.http.get('assets/CounterPartyAnalytics.json').subscribe(data=>{
      this.counterparties = data;
      subject.next(this.counterparties);
    });
    return subject.asObservable();
  }

  getSingleCounterParty(id:number){
    var subject = new Subject<string>();
    this.getCounterPartyData().subscribe(data=>{
      this.counterparties = data;
      console.log('counterparty:'+this.counterparties);
      console.log(this.counterparties[id-1].Id);
      subject.next(this.counterparties[id-1].Counterparty);      

    });
    return subject.asObservable();
    
  }

}
