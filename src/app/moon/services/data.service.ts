import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoonData } from '../pages/interfaces/dataMoon.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private clickEventNavComponents = new BehaviorSubject({});

  get getEvent(): Observable<any> {
    return this.clickEventNavComponents as Observable<any>;
  }

  set setEvent(clickEvent: Event) {
    this.clickEventNavComponents.next(clickEvent);
  }

  dataProject(): Observable<MoonData> {
    return this.http.get<MoonData>('assets/data.json');
  }

  constructor(private http: HttpClient) {}
}
