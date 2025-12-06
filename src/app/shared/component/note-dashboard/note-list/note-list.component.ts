import { Component, OnInit } from '@angular/core';
import { Inote } from 'src/app/shared/models/todos';
import { NoteService } from 'src/app/shared/service/note.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
noteArr:Array<Inote>=[]
  constructor(private _snackBar:SnackbarService,
    private _noteService:NoteService) { }

  ngOnInit(): void {
        this._noteService.fetchAllNote()
    .subscribe({
      next:res=>{
        this.noteArr=res
      },
      error:err=>{
        err='Something went wrong while fetching data !'
        this._snackBar.openSnackBar(err)
      }
    })

  }
  trackById(index:number,note:Inote){
return note.noteId
  }
removeNote(noteId:string){
  this._noteService.removeNote(noteId)
}
}
