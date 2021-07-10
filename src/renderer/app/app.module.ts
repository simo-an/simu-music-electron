import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntDesignModule } from '@renderer/app/plugins/ui/ant-design.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AntDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
