import { Injectable } from '@angular/core';
import { Itask } from '../models/todos';
import { Observable, of } from 'rxjs';

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

  constructor() { }
  fetchAllTaskList():Observable<Itask[]>{
    return of(this.taskList)
  }
}
