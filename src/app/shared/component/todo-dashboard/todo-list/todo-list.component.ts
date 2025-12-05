import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/models/todos';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todosArr:Array<Itodo>=[]
  constructor(private _todoService:TodoService,
    private _snackBar:SnackbarService
  ) { }

  ngOnInit(): void {
    this._todoService.fetchAllTodo()
    .subscribe({
      next:res=>{
        this.todosArr=res
      },
      error:err=>{
        err='Something went wrong while fetching the data !'
       this._snackBar.openSnackBar(err)
      }
    })
  }
trackById(index:number,todo:Itodo){
return todo.todoId
}
}
