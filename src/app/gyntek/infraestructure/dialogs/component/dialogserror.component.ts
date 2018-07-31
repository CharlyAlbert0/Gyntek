import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import {InputSimpleModel} from '../model/inputsimplemodel';
import {MatSlideToggleModule} from '@angular/material';

@Component({
    selector: 'error-dialog',
    templateUrl: '../view/dialogserror.component.html',
    styleUrls: ['../view/dialogserror.component.css']
})
export class DialogError {

    showHide: boolean;
    public title: string;
    public section:string;
    public jsonObj:any;
    public message: string;
    public type:number;
    public size:number;
    public isQuestion:boolean;
    public icon:number;
    public TextInput:string;
    public result:InputSimpleModel = new InputSimpleModel();
    constructor(public dialogRef: MatDialogRef<DialogError>) {

       this.showHide = false;
    }

    Ok(){
      debugger;
        this.result.Result=true;
        this.result.TextInput = this.TextInput;
        this.dialogRef.close(this.result);
    }

    Cancel(){
      this.dialogRef.close();
    }

}
