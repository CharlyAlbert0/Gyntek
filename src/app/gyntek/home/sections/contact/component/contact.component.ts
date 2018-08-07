import { Component, OnInit } from '@angular/core';
import { SystemContext } from '../../../../infraestructure/context/model/systemcontext';

@Component({
  selector: 'app-contact',
  templateUrl: '../view/contact.component.html',
  styleUrls: ['../view/contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private systemContext:SystemContext) { }

  ngOnInit() {
  }

}
