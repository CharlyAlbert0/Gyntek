import { LanguageModel } from '../../../infraestructure/Languages/model/languague.model';
import { Component, OnInit } from '@angular/core';
import { SystemContext } from '../../../infraestructure/context/model/systemcontext';
import { EnumLanguage } from '../../../infraestructure/enums/enumlanguage';



@Component({
  selector: 'app-navbar',
  templateUrl: '../view/navbar.component.html',
  styleUrls: ['../view/navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public systemContext: SystemContext) { }

  ngOnInit() {
     debugger
     console.log(this.systemContext);
     
  }

  cambiar(){
    debugger
    if(this.systemContext.LanguageApp === EnumLanguage.spanish){
      this.systemContext.LanguageApp = EnumLanguage.english;
      this.systemContext.Language = new LanguageModel(EnumLanguage.english);
    }
      

       else if(this.systemContext.LanguageApp === EnumLanguage.english){
        this.systemContext.LanguageApp = EnumLanguage.spanish;
        this.systemContext.Language = new LanguageModel(EnumLanguage.spanish);
       }
       
  }

}
