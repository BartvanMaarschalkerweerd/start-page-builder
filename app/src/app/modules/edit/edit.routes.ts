import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';

export const editRoutes: Routes = [
	{
		path: 			'edit',  
		component: 		EditComponent
	}
];

export const editRouting = RouterModule.forChild(editRoutes);