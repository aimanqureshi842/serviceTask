import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from 'src/app/shared/service/note.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
isInEditMode:boolean=false;
@ViewChild('noteForm') noteForm!:NgForm

private _uuid=inject(UuidService);
private _noteService=inject(NoteService)
  constructor() { }

  ngOnInit(): void {
  }
addNote(){
if(this.noteForm.valid){
  let noteObj={
        ...this.noteForm.value,
        noteId:this._uuid.Uuid()
      }
      this.noteForm.reset();
  this._noteService.addNote(noteObj)
}else{
  alert('Add note to submit')
}
}
}
