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

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    VfgCommonModule
  ],
  declarations: [CheckListComponent, AgendaComponent, ReservaComponent, FlatArrayPipeExampleComponent, MapIterableExampleComponent],
  exports: [CheckListComponent, AgendaComponent, FlatArrayPipeExampleComponent, MapIterableExampleComponent]
})
export class DevelopModule { }
