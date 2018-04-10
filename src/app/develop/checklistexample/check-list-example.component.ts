import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vfg-check-list-example',
  templateUrl: './check-list-example.component.html',
  styleUrls: [ ]
})
export class CheckListComponent implements OnInit {

	private grupos: Array<any> = [
		{ id: 1, nombre:'Burning', tipo: 'Banda'},
		{ id: 2, nombre:'Barricada', tipo: 'Banda'},
		{ id: 3, nombre:'Desakato', tipo: 'Banda'},
		{ id: 4, nombre:'Rosendo', tipo: 'Solista'},
		{ id: 6, nombre:'El Drogas', tipo: 'Solista'}
	];


	private discos: Array<any> = [
		{ cod: 1, title:'El fin de la década', anyo: 1979},
		{ cod: 2, title:'Pasion por el ruido', anyo: 1989},
		{ cod: 3, title:'Para bien o para mal', anyo: 1994},
		{ cod: 4, title:'Un dia nada más', anyo: 2016}
	];

	private selectedUno: any;
	private selectedDos: any;

	constructor() { }

  	ngOnInit() {

  	}

  	updateUno(event: object) {
  		this.selectedUno = event;
  	}

  	updateDos(event: object) {
  		this.selectedDos = event;
  	}
}
