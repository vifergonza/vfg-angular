import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-iterable-example',
  templateUrl: './map-iterable-example.component.html',
  styleUrls: ['./map-iterable-example.component.css']
})
export class MapIterableExampleComponent implements OnInit {

  private discos: Map<String, Array<any>> = new Map<String, Array<any>>();

  private label = "{{ discos | mapIterablePipe | flatArrayPipe:'titulo' }}";

  constructor() { }

  ngOnInit() {
  	let discosBurning = [
  		{ titulo: 'Madrid', discografica: 'Ocre-Belter', anyo: '1978'},
		{ titulo: 'El fin de la década', discografica: 'Ocre-Belter', anyo: '1979'},
  		{ titulo: 'Bulevar', discografica: 'Ocre-Belter', anyo: '1980'},
  		{ titulo: 'Noches de Rock & Roll', discografica: 'Belter', anyo: '1984'}
  	];

  	this.discos.set('Burning', discosBurning);

  	let discosDesakato = [
  		{ titulo: 'Con el viento de cara', anyo: '2008'},
		{ titulo: 'Miseria, sangre y plomo', anyo: '2010'},
  		{ titulo: 'Insercia', anyo: '2012'},
  		{ titulo: 'Buen viaje', anyo: '2014'}
  	];

  	this.discos.set('Desakato', discosDesakato);
  }

}
