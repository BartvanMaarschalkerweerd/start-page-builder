import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './preview.component';

export const previewRoutes: Routes = [
	{
		path: 			'preview',  
		component: 		PreviewComponent
	}
];

export const previewRouting = RouterModule.forChild(previewRoutes);