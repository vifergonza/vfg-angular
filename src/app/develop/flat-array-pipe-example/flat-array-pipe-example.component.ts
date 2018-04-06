import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flat-array-pipe-example',
  templateUrl: './flat-array-pipe-example.component.html',
  styleUrls: ['./flat-array-pipe-example.component.css']
})
export class FlatArrayPipeExampleComponent implements OnInit {

  private canciones: Array<any> = [
  	{ titulo: 'Visperas de destruccion', autor: 'Los suaves', disco: "El jardin de las delicias" },
  	{ titulo: 'A remar', autor: 'Rosendo' },
  	{ titulo: 'Frio', autor: 'El Drogas', disco: 'Un dia nada mas'}
  ];

  private discos: Array<string> = [
  	'Memorias de un ser humano',
  	'Algazara',
  	'Miedo',
  	'La edad del fuego'
  ];

  private labelTitulo = "{{ canciones | flatArrayPipe:'titulo' }}";
  private labelAutor = "{{ canciones | flatArrayPipe:'autor' }}";
  private labelDisco = "{{ canciones | flatArrayPipe:'disco' }}";
  private labelAnyo = "{{ canciones | flatArrayPipe:'anyo' }}";
  private labelDiscos = "{{ discos | flatArrayPipe }}";

  constructor() { }

  ngOnInit() {
  }

}
