import { NgModule } from '@angular/core';
import { startRouting } from './start.routes';
import { FooterModule } from 'src/app/core/components/footer/footer.module';
import { HeaderModule } from 'src/app/core/components/header/header.module';
import { StartComponent } from './start.component';

@NgModule({
	declarations: [
		StartComponent
	],
	imports: [
		startRouting,
		HeaderModule,
		FooterModule
	]
})
export class StartModule { }
