import { NgModule } from '@angular/core';
import { RecommendComponent } from './components/recommend/recommend.component';
import { RadioComponent } from './components/radio/radio.component';
import { VideoComponent } from './components/video/video.component';
import { DownloadComponent } from './components/download/download.component';
import { LocalComponent } from './components/local/local.component';
import { RecentComponent } from './components/recent/recent.component';
import { CollectionComponent } from './components/collection/collection.component';


@NgModule({
  declarations: [
    RecommendComponent,
    RadioComponent,
    VideoComponent,
    DownloadComponent,
    LocalComponent,
    RecentComponent,
    CollectionComponent
  ],
  imports: [],
  exports: [
    RecommendComponent,
    RadioComponent,
    VideoComponent,
    DownloadComponent,
    LocalComponent,
    RecentComponent,
    CollectionComponent,
  ]
})
export class PagesModule { }
