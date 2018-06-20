import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vfg-drop-file',
  templateUrl: './vfg-drop-file.component.html',
  styleUrls: ['./vfg-drop-file.component.css']
})
export class VfgDropFileComponent implements OnInit {

  public fileName = 'Drop file';
  constructor() { }

  ngOnInit() {
  }

  fileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.className = (e.type == "dragover" ? "hover" : "");
    console.log('fileDragOver', e);
  }

  fileSelectHandler(e) {
    this.fileDragHover(e);
    var files = e.target.files || e.dataTransfer.files;
    console.log('fileSelectHandler', files);
    for (var i = 0, f; f = files[i]; i++) {
      console.log(f.name, f.type, f.size);
    }
  }

  onDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('onDrag', e);
  }

  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('onDrop', e);
  }

}
