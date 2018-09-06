import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarapiService {

  constructor(private http: HttpClient) { }

  categories = [
    { id: 1, name: "Characters"},
    { id: 2, name: "Films"},
    { id: 3, name: "Species"},
    { id: 4, name: "Starship"},
    { id: 5, name: "Vehicles"},
    { id: 6, name: "Planets"}
  ];

  getCategories(): Observable<any>{
    console.log("get categories ...");
    return this.http.get('https://swapi.co/api/');
  }
}
