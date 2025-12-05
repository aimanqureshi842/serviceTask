import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Itodo } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todosArr:Array<any>=[{
  todoItem:'Js',
  todoId:'123'
}
]
  constructor() { }
  fetchAllTodo():Observable<Itodo[]>{
    return of(this.todosArr)
  }
}
