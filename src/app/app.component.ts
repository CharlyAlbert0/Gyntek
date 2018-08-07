import { Component, OnInit } from '@angular/core';
import { SystemContext } from './gyntek/infraestructure/context/model/systemcontext';
import { LanguageModel } from './gyntek/infraestructure/Languages/model/languague.model';
import { EnumLanguage } from './gyntek/infraestructure/enums/enumlanguage';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public systemContext: SystemContext) {
    
    
  }

  ngOnInit(){
    this.FillLanguages();
  }
  
  FillLanguages() {  
    this.systemContext.LanguageApp = 2; 
    this.systemContext.Language = new LanguageModel(this.systemContext.LanguageApp);
  }
}
