import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vfg-dropdown-list',
  templateUrl: './vfg-dropdown-list.component.html',
  styleUrls: ['./vfg-dropdown-list.component.css']
})
export class VfgDropdownListComponent implements OnInit {

  private isCollapsed: Boolean = true;

  @Input() list: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
