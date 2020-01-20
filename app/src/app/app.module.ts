import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { PreviewComponent } from './preview/preview.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		BuilderComponent,
		PreviewComponent,
		StartComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
