import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ialert } from 'src/app/shared/models/todos';
import { AlertService } from 'src/app/shared/service/alert.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-alert-form',
  templateUrl: './alert-form.component.html',
  styleUrls: ['./alert-form.component.scss']
})
export class AlertFormComponent implements OnInit {
isInEditMode:boolean=false;
editedObj!:Ialert
@ViewChild('alertForm') alertForm!:NgForm

private _uuid=inject(UuidService);
private _alert=inject(AlertService);
private _snackBar=inject(SnackbarService)
  constructor() { }

  ngOnInit(): void {
    this._alert.editTodo$
    .subscribe({
      next:res=>{
        this.editedObj=res;
        this.isInEditMode=true
        this.alertForm.form.patchValue(this.editedObj);
      },
      error:err=>{
        this._snackBar.openSnackBar(err)
      }
    })
  }

addalertTodo(){
if(this.alertForm.valid){
  let alertObj={
  ...this.alertForm.value,
  alertId:this._uuid.Uuid()
  }
  this.alertForm.reset();
  this._alert.addAlertTodo(alertObj);
}else{
  alert('Add todo first !')
}
}

updateAlert(){
if(this.alertForm.valid){
  let updatedObj={
...this.alertForm.value,
alertId:this.editedObj.alertId
  }
  this.alertForm.reset();
  this.isInEditMode=false
  this._alert.updatedAlertTodo(updatedObj)
}
}
}
