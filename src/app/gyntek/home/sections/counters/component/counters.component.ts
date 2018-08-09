import { Component, OnInit } from '@angular/core';
import { SystemContext } from '../../../../infraestructure/context/model/systemcontext';

@Component({
  selector: 'app-counters',
  templateUrl: '../view/counters.component.html',
  styleUrls: ['../view/counters.component.css']
})
export class CountersComponent implements OnInit {

  constructor(public systemContext:SystemContext) { }

  ngOnInit() {
  }

}
