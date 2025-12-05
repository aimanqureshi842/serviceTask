import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../service/snackbar.service';
import { NoteService } from '../../service/note.service';
import { Inote } from '../../models/todos';

@Component({
  selector: 'app-note-dashboard',
  templateUrl: './note-dashboard.component.html',
  styleUrls: ['./note-dashboard.component.scss']
})
export class NoteDashboardComponent implements OnInit {
noteArr:Array<Inote>=[]
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
