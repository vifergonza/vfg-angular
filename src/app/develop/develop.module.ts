import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VfgCommonModule } from '../vfg-common/vfg-common.module'
import { CheckListComponent } from './checklistexample/check-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    VfgCommonModule
  ],
  declarations: [CheckListComponent],
  exports: [CheckListComponent]
})
export class DevelopModule { }
