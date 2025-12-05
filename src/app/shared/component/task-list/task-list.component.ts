import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Itask } from '../../models/todos';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
taskList:Array<Itask>=[]
  constructor(private _taskService:TaskService,
    private _snackBarService:SnackbarService
  ) { }

  ngOnInit(): void {
this._taskService.fetchAllTaskList()
.subscribe({
  next:res=>{
    this.taskList=res
  },
error:err=>{
  err='Something went wrong while fetching the data !'
  this._snackBarService.openSnackBar('')
}
})
  }
  trackById(index:number,task:Itask){
    return task.taskId
  }

}
