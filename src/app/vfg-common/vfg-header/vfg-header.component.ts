import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vfg-header',
  templateUrl: './vfg-header.component.html',
  styleUrls: ['./vfg-header.component.css']
})
export class VfgHeaderComponent implements OnInit {

  public isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
