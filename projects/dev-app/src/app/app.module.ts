import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { CkadButtonModule } from '@ckapp/angular-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule /*CkadButtonModule*/],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
