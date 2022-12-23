import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from  '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.API_KEY,
      'X-RapidAPI-Host': environment.API_HOST
    });
    
    return this.http.get(
      environment.BASE_URL,
      {headers: headers}
      )
  }
}
