import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './router/routing.module';
import { AppComponent } from './app.component';
import { AntDesignModule } from '@renderer/app/plugins/ui/ant-design.module';
import { ViewModule } from '@renderer/app/views/view.module';
import {PagesModule} from '@renderer/app/views/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AntDesignModule,
    ViewModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
