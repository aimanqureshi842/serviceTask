import { Injectable } from '@angular/core';
import { Inote } from '../models/todos';
import { Observable, of } from 'rxjs';

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

  constructor() { }
  fetchAllNote():Observable<Inote[]>{
    return of(this.notesList)
  }
}
