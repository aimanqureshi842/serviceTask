import { Component, OnInit } from '@angular/core';
import { Ialert } from 'src/app/shared/models/todos';
import { AlertService } from 'src/app/shared/service/alert.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {
alerArr:Array<Ialert>=[]
  constructor(private _alertService:AlertService,
    private _snackBar:SnackbarService
  ) { }

  ngOnInit(): void {
    this._alertService.fetchAllAlert()
    .subscribe({
      next:res=>{
        this.alerArr=res
      },
      error:err=>{
        err='Something went wrong while fetching data !'
        this._snackBar.openSnackBar(err)
      }
    })
  }
trackById(index:number,alert:Ialert){
  return alert.alertId
}
}
