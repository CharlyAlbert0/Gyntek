import { Component, OnInit } from '@angular/core';
import { SystemContext } from '../../../infraestructure/context/model/systemcontext';

@Component({
  selector: 'app-footer',
  templateUrl: '../view/footer.component.html',
  styleUrls: ['../view/footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public systemContext:SystemContext) { }

  ngOnInit() {
  }

}
