import { inject, Injectable } from '@angular/core';
import { Ialert } from '../models/todos';
import { Observable, of, Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

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
private _snackBar=inject(SnackbarService)
  constructor() { }
  editTodo$:Subject<Ialert>=new Subject();

  fetchAllAlert():Observable<Ialert[]>{
    return of(this.alertList)
  }

  addAlertTodo(alertObj:Ialert){
    this.alertList.unshift(alertObj);
    this._snackBar.openSnackBar('Todo added successfully !')
  }

removeAlertTodo(id:string){
  let getConfirm=confirm('Are you sure you want to delete this alert todo ?')
  if(getConfirm){
    let getIndex=this.alertList.findIndex(alert=>alert.alertId===id);
    this.alertList.splice(getIndex,1);
    this._snackBar.openSnackBar('Todo item removed successfully !')
  }
}

updatedAlertTodo(updatedAlert:Ialert){
let getIndex=this.alertList.findIndex(alert=>alert.alertId===updatedAlert.alertId);
this.alertList[getIndex]=updatedAlert;
this._snackBar.openSnackBar('Todo Alert updated succcessfully !')
}
}
