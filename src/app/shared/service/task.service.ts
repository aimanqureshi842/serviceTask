import { inject, Injectable } from '@angular/core';
import { Itask } from '../models/todos';
import { Observable, of } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 taskList :Itask[]= [
  {
    taskId: "t1",
    taskTitle: "Buy groceries"
  },
  {
    taskId: "t2",
    taskTitle: "Complete assignment"
  },
  {
    taskId: "t3",
    taskTitle: "Pay electricity bill"
  },
  {
    taskId: "t4",
    taskTitle: "Go for a walk"
  }
];

private _snackBar=inject(SnackbarService)
  constructor() { }
  fetchAllTaskList():Observable<Itask[]>{
    return of(this.taskList)
  }
  addTask(taskObj:Itask){
this.taskList.unshift(taskObj);
this._snackBar.openSnackBar('Task added successfully !')
  }
  removeTask(id:string){
    let getConfirm=confirm('Are you sure you want to delete this task ?')
    if(getConfirm){
      let getIndex=this.taskList.findIndex(task=>task.taskId===id);
      this.taskList.splice(getIndex,1);
      this._snackBar.openSnackBar('Task removed successfully !')

    }
  }
}
