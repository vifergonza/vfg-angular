import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { appRouting } from '../app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VfgHeaderComponent } from './vfg-header/vfg-header.component';
import { VfgDefaultComponent } from './vfg-default/vfg-default.component';
import { VfgCheckListComponent } from './vfg-check-list/vfg-check-list.component';
import { FlatArrayPipe } from './pipes/flat-array.pipe';

@NgModule({
  imports: [
    CommonModule,
    appRouting,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VfgHeaderComponent, VfgDefaultComponent, VfgCheckListComponent, FlatArrayPipe],
  exports: [ VfgHeaderComponent, VfgCheckListComponent, FlatArrayPipe]
})
export class VfgCommonModule { }
