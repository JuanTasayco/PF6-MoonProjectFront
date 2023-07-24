import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Destination, MoonData } from '../pages/interfaces/dataMoon.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private clickEventNavComponents: BehaviorSubject<string> =
    new BehaviorSubject('moon');

  get getName(): Observable<string> {
    return this.clickEventNavComponents as Observable<string>;
  }

  set setName(name: string) {
    this.clickEventNavComponents.next(name);
  }

  getAllData(): Observable<MoonData> {
    return this.http.get<MoonData>('assets/data.json');
  }

  getDestinations(): Observable<Destination[]> {
    return this.http
      .get<MoonData>('assets/data.json')
      .pipe(map((result) => result.destinations));
  }

  constructor(private http: HttpClient) {}
}
