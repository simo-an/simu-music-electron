import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { PagesModule } from '@renderer/app/views/pages/pages.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent,
    LayoutComponent,
    HeaderComponent,
    PlayerComponent
  ],
  imports: [
    PagesModule,
    RouterModule
  ],
  exports: []
})
export class LayoutModule { }
