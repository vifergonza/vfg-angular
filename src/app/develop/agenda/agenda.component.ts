import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

public isCollapsed = true;

private reservas = [
	{ 
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

}
