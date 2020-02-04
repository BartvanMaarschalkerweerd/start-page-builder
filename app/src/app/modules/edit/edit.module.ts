import { NgModule } from '@angular/core';
import { EditComponent } from './edit.component';
import { editRouting } from './edit.routes';
import { HeaderModule } from 'src/app/core/components/header/header.module';
import { FooterModule } from 'src/app/core/components/footer/footer.module';

@NgModule({
	declarations: [
		EditComponent
	],
	imports: [
		editRouting,
		HeaderModule,
		FooterModule
	]
})
export class EditModule { }
