import { Routes, RouterModule } from '@angular/router';

import { VfgDefaultComponent } from './vfg-common/vfg-default/vfg-default.component' ;
import { CheckListComponent } from './develop/checklistexample/check-list-example.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: VfgDefaultComponent },
	{ path: 'checklist', component: CheckListComponent}
];

export const appRouting = RouterModule.forRoot(routes);
