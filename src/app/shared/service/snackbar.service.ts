import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matsnackBar:MatSnackBar) { }
openSnackBar(msg:string){
  this._matsnackBar.open(msg,"Close",{
    duration:3000,
    horizontalPosition:'left',
    verticalPosition:'bottom'
  })
}




}
