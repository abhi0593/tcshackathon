import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterPartyAnalyticsService } from 'src/app/services/counter-party-analytics.service';

@Component({
  selector: 'app-counterparty-detail',
  templateUrl: './counterparty-detail.component.html',
  styleUrls: ['./counterparty-detail.component.css']
})
export class CounterpartyDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private counterPartyService: CounterPartyAnalyticsService ) { }

  counterPartyName:String;
  id:number;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log('id:'+this.id)
    this.counterPartyService.getSingleCounterParty(this.id).subscribe(data=>{
      this.counterPartyName = data;
    })


  }
  

}
