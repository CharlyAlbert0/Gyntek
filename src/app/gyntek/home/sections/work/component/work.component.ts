import { Component, OnInit } from '@angular/core';
import { SystemContext } from '../../../../infraestructure/context/model/systemcontext';

@Component({
  selector: 'app-work',
  templateUrl: '../view/work.component.html',
  styleUrls: ['../view/work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(public systemContext:SystemContext) { }

  ngOnInit() {
  }

}
