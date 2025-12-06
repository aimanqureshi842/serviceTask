import { Injectable } from '@angular/core';
import { Inote } from '../models/todos';
import { Observable, of } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
notesList:Array<Inote> = [
  {
    noteId: "n1",
    noteTitle: "Finish homework"
  },
  {
    noteId: "n2",
    noteTitle: "Visit bank"
  },
  {
    noteId: "n3",
    noteTitle: "Dinner with friends"
  }
];

  constructor(
    private _snackBar:SnackbarService
  ) { }
  fetchAllNote():Observable<Inote[]>{
    return of(this.notesList)
  }
  addNote(noteObj:Inote){
   this.notesList.unshift(noteObj);
this._snackBar.openSnackBar('Note added successfully !')
  }
  removeNote(id:string){
    let getConfirm=confirm('Are you sure you want to remove this note !')
    if(getConfirm){
      let getIndex=this.notesList.findIndex(note=>note.noteId===id);
      this.notesList.splice(getIndex,1);
      this._snackBar.openSnackBar('This note removed successfully !')
    }
  }
}
