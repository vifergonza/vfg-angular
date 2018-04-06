import { Routes, RouterModule } from '@angular/router';

import { VfgDefaultComponent } from './vfg-common/vfg-default/vfg-default.component' ;
import { CheckListComponent } from './develop/checklistexample/check-list-example.component';
import { AgendaComponent } from './develop/agenda/agenda.component';
import { FlatArrayPipeExampleComponent } from './develop/flat-array-pipe-example/flat-array-pipe-example.component';


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: VfgDefaultComponent },
	{ path: 'checklist', component: CheckListComponent},
	{ path: 'agenda', component: AgendaComponent},
	{ path: 'flatarraypipe', component: FlatArrayPipeExampleComponent}
];

export const appRouting = RouterModule.forRoot(routes);
