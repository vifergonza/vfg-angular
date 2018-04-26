import { Component, OnInit } from '@angular/core';
import { ArrayUtilsService } from '../../vfg-common/array-utils.service';

@Component({
  selector: 'app-array-list-service-example',
  templateUrl: './array-list-service-example.component.html',
  styleUrls: ['./array-list-service-example.component.css']
})
export class ArrayListServiceExampleComponent implements OnInit {

	private  deportes = [
		{ nombre: "Baloncesto", logo: "" },
		{ nombre: "Padel", logo: "" },
		{ nombre: "Polideportivo del Llano", logo: "" },
		{ nombre: "Tenis", logo: "" },
		{ nombre: "Hockey", logo: "" },
		{ nombre: "Natacion", logo: "" },
		{ nombre: "Polideportivo del Llano", logo: "" },
		{ nombre: "La calzada", logo: "" }
	];

	private  deportesNuevos = [
		{ nombre: "Baloncesto", logo: "" },
		{ nombre: "Padel", logo: "" },
		{ nombre: "Tenis", logo: "" },
		{ nombre: "Natacion", logo: "" },
		{ nombre: "Golf", logo: "" },
		{ nombre: "Petanca", logo: "" }
	];

	private item = { nombre: "Polideportivo del Llano", logo: "" };
	private copiaNuevos;

	constructor(private arrayService: ArrayUtilsService) { }

	ngOnInit() {

	}

	get remove(): Array<any> {
		let copia = this.deportes.slice();
		this.arrayService.removeElement(copia, this.item, (x, y) => { return x.nombre === y.nombre });
		return copia;
	}

	get update(): Array<any> {
		let copia = this.deportes.slice();
		this.copiaNuevos = this.deportesNuevos.slice();
		this.arrayService.updateArray(copia, this.copiaNuevos, (x, y) => { return x.nombre === y.nombre });
		return copia;
	}
}
