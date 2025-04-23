import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // يدمج الـ providers الموجودة مسبقًا
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch((err) => console.error(err));
  
