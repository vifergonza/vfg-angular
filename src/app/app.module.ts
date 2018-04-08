import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { appRouting } from './app.routing';
import { DevelopModule } from './develop/develop.module';
import { VfgCommonModule } from './vfg-common/vfg-common.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
	  VfgCommonModule,
    DevelopModule,
	  appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
