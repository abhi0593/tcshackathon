import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getCounterPartyNews(id){
    return this.http.get('assets/News_'+ id +'.json');
  }
}
