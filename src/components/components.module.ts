import { NgModule } from '@angular/core';
import { GoogleLoginComponent } from './google-login/google-login';
import { HeaderMenuComponent } from './header-menu/header-menu';
@NgModule({
	declarations: [GoogleLoginComponent,
    HeaderMenuComponent,
    HeaderMenuComponent],
	imports: [],
	exports: [GoogleLoginComponent,
    HeaderMenuComponent,
    HeaderMenuComponent]
})
export class ComponentsModule {}
