import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrap, platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app.component.ts';
import { Hello } from './hello.component';
import { HelloList } from './hello-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    App,
    Hello,
    HelloList
  ],
  bootstrap: [ App ]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
