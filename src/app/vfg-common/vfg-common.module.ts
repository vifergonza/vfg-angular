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
import { VfgDropdownListComponent } from './vfg-dropdown-list/vfg-dropdown-list.component';
import { ArrayUtilsService } from './array-utils.service';
import { VfgDropFileComponent } from './vfg-drop-file/vfg-drop-file.component';


@NgModule({
  imports: [
    CommonModule,
    appRouting,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VfgHeaderComponent,
  	VfgDefaultComponent,
  	VfgCheckListComponent,
  	FlatArrayPipe,
  	MapIterablePipe,
  	VfgDropdownListComponent,
  	VfgDropFileComponent
  ],
  exports: [ VfgHeaderComponent, 
  	VfgCheckListComponent, 
  	FlatArrayPipe, 
  	MapIterablePipe,
  	VfgDropdownListComponent
  ],
  providers: [ ArrayUtilsService ]
})
export class VfgCommonModule { }
