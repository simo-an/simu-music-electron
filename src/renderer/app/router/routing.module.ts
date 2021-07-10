import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent} from '@renderer/app/views/layout/layout.component';
import { RecommendComponent } from '@renderer/app/views/pages/components/recommend/recommend.component';
import { RecentComponent } from '@renderer/app/views/pages/components/recent/recent.component';
import { RadioComponent } from '@renderer/app/views/pages/components/radio/radio.component';
import { CollectionComponent } from '@renderer/app/views/pages/components/collection/collection.component';
import { DownloadComponent } from '@renderer/app/views/pages/components/download/download.component';
import { LocalComponent } from '@renderer/app/views/pages/components/local/local.component';
import { VideoComponent } from '@renderer/app/views/pages/components/video/video.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'recommend', pathMatch: 'full' },
      { path: 'recommend', component: RecommendComponent },
      { path: 'recent', component: RecentComponent },
      { path: 'radio', component: RadioComponent },
      { path: 'collection', component: CollectionComponent },
      { path: 'download', component: DownloadComponent },
      { path: 'local', component: LocalComponent },
      { path: 'video', component: VideoComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
