import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartModule } from './modules/start/start.module';
import { FooterModule } from './core/components/footer/footer.module';
import { EditModule } from './modules/edit/edit.module';
import { PreviewModule } from './modules/preview/preview.module';
import { HeaderModule } from './core/components/header/header.module';
import { DownloadModule } from './modules/download/download.module';

// Routers
const appRoutes: Routes = [];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		// Core modules
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		FooterModule,
		HeaderModule,

		// Custom modules
		StartModule,
		EditModule,
		PreviewModule,
		DownloadModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
