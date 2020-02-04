import { NgModule } from '@angular/core';
import { DownloadComponent } from './download.component';
import { downloadRouting } from './download.routes';
import { HeaderModule } from 'src/app/core/components/header/header.module';
import { FooterModule } from 'src/app/core/components/footer/footer.module';



@NgModule({
	declarations: [
		DownloadComponent
	],
	imports: [
		downloadRouting,
		HeaderModule,
		FooterModule
	]
})
export class DownloadModule { }
