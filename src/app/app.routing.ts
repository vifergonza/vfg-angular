import { Routes, RouterModule } from '@angular/router';

import { VfgDefaultComponent } from './vfg-common/vfg-default/vfg-default.component' ;
import { CheckListComponent } from './develop/checklistexample/check-list-example.component';
import { AgendaComponent } from './develop/agenda/agenda.component';
import { FlatArrayPipeExampleComponent } from './develop/flat-array-pipe-example/flat-array-pipe-example.component';
import { MapIterableExampleComponent } from './develop/map-iterable-example/map-iterable-example.component';
import { DropDownListExampleComponent } from './develop/drop-down-list-example/drop-down-list-example.component';
import { ArrayListServiceExampleComponent } from './develop/array-list-service-example/array-list-service-example.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: VfgDefaultComponent },
	{ path: 'checklist', component: CheckListComponent},
	{ path: 'agenda', component: AgendaComponent},
	{ path: 'flatarraypipe', component: FlatArrayPipeExampleComponent},
	{ path: 'mapiterablepipe', component: MapIterableExampleComponent},
	{ path: 'dropdownlist', component: DropDownListExampleComponent},
	{ path: 'arrayService', component: ArrayListServiceExampleComponent}
];

export const appRouting = RouterModule.forRoot(routes);
