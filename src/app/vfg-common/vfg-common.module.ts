import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { appRouting } from '../app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VfgHeaderComponent } from './vfg-header/vfg-header.component';
import { VfgDefaultComponent } from './vfg-default/vfg-default.component';
import { VfgCheckListComponent } from './vfg-check-list/vfg-check-list.component';
import { FlatArrayPipe } from './pipes/flat-array.pipe';
import { MapIterablePipe } from './pipes/map-iterable.pipe' ;


@NgModule({
  imports: [
    CommonModule,
    appRouting,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VfgHeaderComponent, VfgDefaultComponent, VfgCheckListComponent, FlatArrayPipe, MapIterablePipe],
  exports: [ VfgHeaderComponent, VfgCheckListComponent, FlatArrayPipe, MapIterablePipe]
})
export class VfgCommonModule { }
