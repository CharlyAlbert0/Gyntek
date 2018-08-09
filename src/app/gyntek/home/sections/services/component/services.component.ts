import { Component, OnInit } from '@angular/core';
import { SystemContext } from '../../../../infraestructure/context/model/systemcontext';

@Component({
  selector: 'app-services',
  templateUrl: '../view/services.component.html',
  styleUrls: ['../view/services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public systemContext:SystemContext) { }

  ngOnInit() {
  }

}
