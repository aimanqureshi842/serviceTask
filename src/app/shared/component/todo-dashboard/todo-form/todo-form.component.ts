import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/shared/models/todos';
import { TodoService } from 'src/app/shared/service/todo.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  isInEditMode: boolean = false;
  @ViewChild('todoForm') todoForm!: NgForm;
  editedObj!: Itodo

  private _uuid = inject(UuidService);
  private _todoService = inject(TodoService)
  constructor() { }

  ngOnInit(): void {
    this._todoService.editObj$
      .subscribe({
        next: res => {
          this.editedObj = res;
          this.isInEditMode=true
          this.todoForm.form.patchValue(this.editedObj);
          
        }
      })
  }
  addTodo() {
    if (this.todoForm.valid) {
      let todoObj = {
        ...this.todoForm.value,
        todoId: this._uuid.Uuid()
      }
      this.todoForm.reset();
      this._todoService.addTodo(todoObj)
    } else {
      alert('Add todo to first !')
    }
  }

  updateTodo() {
if(this.todoForm.valid){
  let updatedTodo={
    ...this.todoForm.value,
    todoId:this.editedObj.todoId
  }
  this.todoForm.reset();
  this.isInEditMode=false
  this._todoService.updatedTodo(updatedTodo)
}
  }

}
