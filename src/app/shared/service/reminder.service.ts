import { Injectable } from '@angular/core';
import { Ireminder } from '../models/todos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
 reminderList:Array<Ireminder> = [
  {
    reminderId: "r1",
    reminderText: "Morning walk"
  },
  {
    reminderId: "r2",
    reminderText: "Attend meeting at 5 PM"
  },
  {
    reminderId: "r3",
    reminderText: "Pay mobile bill"
  },
  {
    reminderId: "r4",
    reminderText: "Buy vegetables"
  }
];

  constructor() { }
  fetchAllReminder():Observable<Ireminder[]>{
    return of(this.reminderList)
  }
}
