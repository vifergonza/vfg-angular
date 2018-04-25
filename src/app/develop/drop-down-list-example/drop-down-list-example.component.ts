import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-list-example',
  templateUrl: './drop-down-list-example.component.html',
  styleUrls: ['./drop-down-list-example.component.css']
})
export class DropDownListExampleComponent implements OnInit {

  private listaFija =[ 'Un elemento', 'Dos elementos', 'Tres elementos', 'Cuatro elementos'];

  constructor() { }

  ngOnInit() {
		setInterval( () => {
			let item = this.listaFija.shift();
			this.listaFija.push(item);
		}, 2000);  	
  }

}
