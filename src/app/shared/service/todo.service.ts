import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Itodo } from '../models/todos';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todosArr:Array<any>=[{
  todoItem:'Js',
  todoId:'123'
}
]
  constructor(private _snackBar:SnackbarService) { }
  editObj$:Subject<Itodo>=new Subject()
  fetchAllTodo():Observable<Itodo[]>{
    return of(this.todosArr)
  }
  addTodo(todoObj:Itodo){
    this.todosArr.unshift(todoObj);
    this._snackBar.openSnackBar('Todo Item added successfully !')
  }
  removeTodo(id:string){
let getConfirm=confirm('Are you sure you want to delete ?')
if(getConfirm){
  let getIndex=this.todosArr.findIndex(todo=>todo.todoId===id);
  this.todosArr.splice(getIndex,1);
  this._snackBar.openSnackBar('Todo Item removed successfully !')
}
  }

  updatedTodo(updatedObj:Itodo){
let getIndex=this.todosArr.findIndex(todo=>todo.todoId===updatedObj.todoId);
this.todosArr[getIndex]=updatedObj;
this._snackBar.openSnackBar('Todo Item updated successfully !')
  }
}
