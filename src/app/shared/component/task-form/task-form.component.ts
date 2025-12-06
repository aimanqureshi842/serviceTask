import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
isInEditMode:boolean=false;
@ViewChild('taskForm') taskForm!:NgForm

private _uuid=inject(UuidService);
private _taskService=inject(TaskService)
  constructor() { }

  ngOnInit(): void {
  }
addTask(){
if(this.taskForm.valid){
 let taskObj={
  ...this.taskForm.value,
  taskId:this._uuid.Uuid()
 }
 this.taskForm.reset();
 this._taskService.addTask(taskObj)
}else{
  alert('Add task to the field !')
}
}
}
