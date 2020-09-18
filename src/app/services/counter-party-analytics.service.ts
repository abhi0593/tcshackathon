import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject, BehaviorSubject } from 'rxjs';

interface CounterParties{
  CounterParties:[]
}


@Injectable({
  providedIn: 'root'
})
export class CounterPartyAnalyticsService {

  constructor(private http:HttpClient) { }

  allcounterparties;
  singleCounterParty;
  CounterPartySubject = new BehaviorSubject<CounterParties>({CounterParties:[]});

  getCounterPartySubject(){
    console.log('Change Detected in Behaviour Subject');
    return this.CounterPartySubject.asObservable();    
  }

  getCounterPartyDataLive(){
    this.getCounterPartyData();
    setTimeout(()=>this.getCounterPartyData(),50000);
  }

  getCounterPartyData(){
    this.http.get('http://localhost:3000/listCounterParties').subscribe(data=>{
      this.allcounterparties = data;
      console.log('data received from API');
      this.CounterPartySubject.next(this.allcounterparties);
    });
    
    return this.CounterPartySubject.asObservable();
  }

  getSingleCounterParty(id:number){
    var subject = new Subject<string>();
    this.getCounterPartyData().subscribe(data=>{
      this.singleCounterParty = data['CounterParties'];
      console.log('counterparty:'+this.singleCounterParty);
      console.log(this.singleCounterParty[id-1].Id);
      subject.next(this.singleCounterParty[id-1].Counterparty);      

    });
    return subject.asObservable();
    
  }

}
