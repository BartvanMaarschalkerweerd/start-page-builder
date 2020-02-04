import { NgModule } from '@angular/core';
import { PreviewComponent } from './preview.component';
import { previewRouting } from './preview.routes';
import { HeaderModule } from 'src/app/core/components/header/header.module';
import { FooterModule } from 'src/app/core/components/footer/footer.module';

@NgModule({
	declarations: [
		PreviewComponent
	],
	imports: [
		previewRouting,
		HeaderModule,
		FooterModule
	]
})
export class PreviewModule { }
