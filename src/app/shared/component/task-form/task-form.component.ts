import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { TaskService } from '../../service/task.service';
import { Itask } from '../../models/todos';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  isInEditMode: boolean = false;
  @ViewChild('taskForm') taskForm!: NgForm;
  editedObj!: Itask

  private _uuid = inject(UuidService);
  private _taskService = inject(TaskService)
  constructor() { }

  ngOnInit(): void {
    this._taskService.editObj$
      .subscribe({
        next: res => {
          this.isInEditMode = true
          this.editedObj = res;
          this.taskForm.form.patchValue(this.editedObj)
        }
      })

  }
  addTask() {
    if (this.taskForm.valid) {
      let taskObj = {
        ...this.taskForm.value,
        taskId: this._uuid.Uuid()
      }
      this.taskForm.reset();
      this._taskService.addTask(taskObj)
    } else {
      alert('Add task to the field !')
    }
  }

updateTodo(){
  if(this.taskForm.valid){
    let updatedTask={
      ...this.taskForm.value,
      taskId:this.editedObj.taskId
    }
    this.taskForm.reset();
    this.isInEditMode=false
    this._taskService.updatedTask(updatedTask)
  }
}

}
