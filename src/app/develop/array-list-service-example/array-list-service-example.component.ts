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
		{ nombre: "Tenis", logo: "" },
		{ nombre: "Hockey", logo: "" },
		{ nombre: "Natacion", logo: "" },
		{ nombre: "Polideportivo del Llano", logo: "" },
		{ nombre: "La calzada", logo: "" }
	];

  constructor(private arrayService: ArrayUtilsService) { }

  ngOnInit() {
	

	let item = 	{ nombre: "Polideportivo del Llano", logo: "" };
	this.arrayService.removeElement(this.deportes, item, (x, y) => { return x.nombre === y.nombre });
  }

}
