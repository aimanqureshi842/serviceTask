import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReminderService } from 'src/app/shared/service/reminder.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.scss']
})
export class ReminderFormComponent implements OnInit {
isInEditMode:boolean=false;
@ViewChild('reminderForm') reminderForm!:NgForm


private _uuid=inject(UuidService);
private _reminderService=inject(ReminderService)
  constructor() { }

  ngOnInit(): void {
  }
addReminder(){
if(this.reminderForm.valid){
  let reminderObj={
    ...this.reminderForm.value,
    reminderId:this._uuid.Uuid()
  }
  this.reminderForm.reset()
  this._reminderService.addReminder(reminderObj)
}else{
  alert('Add reminder to submit !')
}
}
}
