import { Component, OnInit } from '@angular/core';
import { SystemContext } from '../../../../infraestructure/context/model/systemcontext';

@Component({
  selector: 'app-about',
  templateUrl: '../view/about.component.html',
  styleUrls: ['../view/about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public systemContext:SystemContext) { }

  ngOnInit() {
  }

}
