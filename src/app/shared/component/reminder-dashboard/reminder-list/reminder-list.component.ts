import { Component, OnInit } from '@angular/core';
import { Ireminder } from 'src/app/shared/models/todos';
import { ReminderService } from 'src/app/shared/service/reminder.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.scss']
})
export class ReminderListComponent implements OnInit {
reminderList:Array<Ireminder>=[]
  constructor(private _reminderService:ReminderService,
    private _snackBar:SnackbarService
  ) { }

  ngOnInit(): void {
    this._reminderService.fetchAllReminder()
        .subscribe({
          next:res=>{
            this.reminderList=res
          },
          error:err=>{
            err='Something went wrong while fetching the data !'
            this._snackBar.openSnackBar(err)
          }
        })
  }
trackById(index:number,reminder:Ireminder){
return reminder.reminderId
}
}
