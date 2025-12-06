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
  addReminder(reminderObj:Ireminder){
    this.reminderList.unshift(reminderObj)
  }
  removeReminder(id:string){
    let getConfirm=confirm('Are you sure you want to remove this reminder ?');
    if(getConfirm){
      let getIndex=this.reminderList.findIndex(reminder=>reminder.reminderId===id);
      this.reminderList.splice(getIndex,1)
    }
  }
}
