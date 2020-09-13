import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsSourcesService {

  constructor(private http:HttpClient) { }

  getNewsSourceForCounterParty(){
    return this.http.get('assets/NewsSources.json');
  }
}
