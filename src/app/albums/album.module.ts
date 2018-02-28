import { NgModule } from '@angular/core';
import { AlbumListComponent } from './album-list.component';

import { RouterModule } from '@angular/router';
import { AlbumService } from './album.service';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'albums', component: AlbumListComponent },
    ])
  ],
  declarations: [
    AlbumListComponent,
  ],
  providers: [
    AlbumService,
  ]
})
export class AlbumModule { }
