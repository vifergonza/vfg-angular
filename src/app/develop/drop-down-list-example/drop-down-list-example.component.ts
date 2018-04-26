import { Component, OnInit } from '@angular/core';

import { Queue } from '../../vfg-common/util/collections/Queue';

@Component({
  selector: 'app-drop-down-list-example',
  templateUrl: './drop-down-list-example.component.html',
  styleUrls: ['./drop-down-list-example.component.css']
})
export class DropDownListExampleComponent implements OnInit {

  private listaFinita: Queue<string> = new Queue<string>(5);
  private listaInfinita: Queue<string> = new Queue<string>();

  constructor() { }

  ngOnInit() {
		setInterval( () => {
			let date = new Date();
      this.listaFinita.push(date.toString());
		}, 2000);  	

    setInterval( () => {
      let date = new Date();
      this.listaInfinita.push(date.toString());
    }, 3000);    
  }

}
