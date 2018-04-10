import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

public isCollapsed = true;

private filtro = {
	deportes: [],
	instalaciones: []
}

private deportes = [
	{ nombre: "Baloncesto", logo: "" },
	{ nombre: "Padel", logo: "" },
	{ nombre: "Tenis", logo: "" },
	{ nombre: "Hockey", logo: "" },
	{ nombre: "Natacion", logo: "" }
];

private instalaciones = [
	{ nombre: "Polideportivo del Llano", logo: "" },
	{ nombre: "La calzada", logo: "" },
	{ nombre: "La arena", logo: "" }
];

private reservas = [
	{ 
		visible: true,
		inicio: "10:00",
		fin: "11:00",
		estado: "Reservada", 
		deportes: [
			{ nombre: "Baloncesto", logo: "" },
			{ nombre: "Padel", logo: "" },
			{ nombre: "Tenis", logo: "" },
			{ nombre: "Hockey", logo: "" }
		],
		modulos: [
			{
				instalacion: "Polideportivo del Llano",
				modulo: "a.Mod.3",
				descripcion: "Es un módulo muy bonito",
				tarifa: "7,5",
				deportes: [
					{ nombre: "Baloncesto", logo: "" },
					{ nombre: "Hockey", logo: "" }			
				]
			},
			{
				instalacion: "Polideportivo del Llano",
				modulo: "a.Mod.4",
				descripcion: "Tambien es un módulo muy bonito",
				tarifa: "7,5",
				deportes: [
					{ nombre: "Baloncesto", logo: "" },
					{ nombre: "Hockey", logo: "" }			
				]
			},
			{
				instalacion: "Polideportivo del Llano",
				modulo: "p.Mod.1",
				descripcion: "Módulo al aire libre.",
				tarifa: "3,5",
				deportes: [
					{ nombre: "Padel", logo: "" }
				]
			},
			{
				instalacion: "La Calzada",
				modulo: "t.Mod.1",
				descripcion: "Pista cubierta.",
				tarifa: "5,5",
				deportes: [
					{ nombre: "Tenis", logo: "" }
				]
			}
		]
	}
	
];

  constructor() { }

  ngOnInit() {
  }

  private addReserva() {
  	this.reservas.push(this.reservas[0]);
  }

  private removeReserva() {
  	if (this.reservas.length>1) {
  		this.reservas.pop();
  	}
  }

  private filtrarDeportes(event: object) {
  	console.log('filtrarDeportes', event);
  	this.filtro.deportes = event as Array<any>;
  	this.aplicarFiltro();
  }

  private aplicarFiltro() {
  	this.reservas.forEach( item => {
  		let deporteFound: boolean = false;
  		if (this.filtro.deportes.length<1) {
  			deporteFound = true;
  		} else {
			this.filtro.deportes.forEach( deporteFiltro => {
				item.deportes.forEach(deporteReserva => {
					if (deporteFiltro.nombre === deporteReserva.nombre) {
						deporteFound = true;
					}
				});
			});
		}

		// comprobar instalaciones
		let instalacionFound: boolean = false;
		if (this.filtro.instalaciones.length<1) {
  			instalacionFound = true;
  		} else {
			this.filtro.instalaciones.forEach( instalacionFiltro => {
				item.modulos.forEach(moduloReserva => {
					if (moduloReserva.instalacion === instalacionFiltro.nombre) {
						instalacionFound = true;
					}
				});
			});
		}
		console.log(deporteFound, instalacionFound);
		item.visible = deporteFound && instalacionFound;
  	});
  }

  private filtrarInstalaciones(event: object) {
  	console.log('filtrarInstalaciones', event);
  	this.filtro.instalaciones = event as Array<any>;
  	this.aplicarFiltro();
  };

}
