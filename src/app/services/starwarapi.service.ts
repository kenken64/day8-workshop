import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hide } from "../models/hide.model";

@Injectable({
  providedIn: 'root'
})
export class StarwarapiService {

  static UNKNOWN_HIDE = new Hide(false);

  hidden$: BehaviorSubject<Hide> = new BehaviorSubject<Hide>(StarwarapiService.UNKNOWN_HIDE);
  
  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    console.log("get categories ...");
    return this.http.get('https://swapi.co/api/');
  }

  hide(toHide){
    console.log("update the behaviour subject");
    this.hidden$.next(new Hide(toHide));
  }

  getCategoryItems(name): Observable<any>{
    console.log("get category items ...");
    return this.http.get(`https://swapi.co/api/${name}/`);
  }

  getDetails(url): Observable<any>{
    console.log("get category items ...");
    return this.http.get(url);
  }
}
