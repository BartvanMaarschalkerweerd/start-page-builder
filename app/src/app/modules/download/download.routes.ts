import { Routes, RouterModule } from '@angular/router';
import { DownloadComponent } from './download.component';

export const downloadRoutes: Routes = [
	{
		path: 			'download',  
		component: 		DownloadComponent
	}
];

export const downloadRouting = RouterModule.forChild(downloadRoutes);