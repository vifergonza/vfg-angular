import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VfgCommonModule } from '../vfg-common/vfg-common.module'
import { CheckListComponent } from './checklistexample/check-list-example.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ReservaComponent } from './reserva/reserva.component';
import { FlatArrayPipeExampleComponent } from './flat-array-pipe-example/flat-array-pipe-example.component';
import { MapIterableExampleComponent } from './map-iterable-example/map-iterable-example.component';
import { DropDownListExampleComponent } from './drop-down-list-example/drop-down-list-example.component';
import { ArrayListServiceExampleComponent } from './array-list-service-example/array-list-service-example.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    VfgCommonModule
  ],
  declarations: [CheckListComponent, AgendaComponent, ReservaComponent, 
  	FlatArrayPipeExampleComponent, MapIterableExampleComponent,
  	DropDownListExampleComponent,
  	ArrayListServiceExampleComponent],
  exports: [CheckListComponent, AgendaComponent, FlatArrayPipeExampleComponent, 
  	MapIterableExampleComponent, DropDownListExampleComponent,
    ArrayListServiceExampleComponent]
})
export class DevelopModule { }
