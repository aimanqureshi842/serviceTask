import { Injectable } from '@angular/core';
import { Ialert } from '../models/todos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
 alertList:Array<Ialert>= [
  {
    alertId: "a1",
    alertMessage: "System update required"
  },
  {
    alertId: "a2",
    alertMessage: "Password will expire soon"
  },
  {
    alertId: "a3",
    alertMessage: "Backup completed"
  }
];

  constructor() { }
  fetchAllAlert():Observable<Ialert[]>{
    return of(this.alertList)
  }
}
