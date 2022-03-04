import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Extraimage } from '../models/extraimage';
import { Travel } from '../models/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private readonly TRAVEL_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getTravels(): Observable<Travel[]> {
    return this.http.get<Travel[]>(this.TRAVEL_URL + '/travels');
  }

  public getExtraImages(): Observable<Extraimage[]> {
    return this.http.get<Extraimage[]>(this.TRAVEL_URL + '/extraimages');
  }

  public getTravel(id: number): Observable<Travel> {
    return this.http.get<Travel>(`${this.TRAVEL_URL}/travels/${id}`);
  }

  public createTravel(travel: Travel): Observable<Travel> {
    return this.http.post<Travel>(this.TRAVEL_URL + '/travels', travel);
  }

  public updateTravel(travel: Travel): Observable<Travel> {
    return this.http.put<Travel>(this.TRAVEL_URL + '/travels/' + travel.id, travel);
  }

  public deleteTravel(id: number | undefined): Observable<Object> {
    return this.http.delete<Object>(`${this.TRAVEL_URL}/travels/${id}`)
  }

}
