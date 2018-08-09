import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../../../../infraestructure/dialogs/service/dialogs.service';
import { EnumTypeD,EnumSizeD,EnumCategoryD,EnumIconD } from '../../../../infraestructure/enums/enumdialog';
import { Router,ActivatedRoute } from '@angular/router';
import { SystemContext } from '../../../../infraestructure/context/model/systemcontext';


@Component({
  selector: 'app-intro',
  templateUrl: '../view/intro.component.html',
  styleUrls: ['../view/intro.component.css']
})
export class IntroComponent implements OnInit {


  constructor(public systemContext:SystemContext,private _DialogsService: DialogsService,private router: Router) { }

  ngOnInit() {


  }

  openMoreDev(){
 debugger

 //this.router.navigate(['moredev']);
    // this._DialogsService.ShowMoreDev().subscribe(data => {
    //       if(data){

    //       }
    //     });

  }

}
