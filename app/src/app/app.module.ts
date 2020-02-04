import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { EditComponent } from './modules/edit/edit.component';
import { StartModule } from './modules/start/start.module';
import { FooterModule } from './core/components/footer/footer.module';

// Routers
const appRoutes: Routes = [];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		EditComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		FooterModule,
		StartModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
