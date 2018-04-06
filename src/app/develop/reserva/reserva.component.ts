import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  private instalacionesCollapsed: Boolean = true;

  @Input() reserva: any;

  constructor() { }

  ngOnInit() {

  }

}
