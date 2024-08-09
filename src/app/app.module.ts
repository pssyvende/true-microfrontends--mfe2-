import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureBModule } from './feature-b/feature-b.module';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureBModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(
    private injector: Injector
  ) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('mfe2-element', ce);
  }
}
