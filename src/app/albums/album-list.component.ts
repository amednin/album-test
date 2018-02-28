import { Component, OnInit } from '@angular/core';

import { IAlbum } from './album';
import { AlbumService } from './album.service';

@Component({
    templateUrl: './album-list.component.html'
})
export class AlbumListComponent implements OnInit {
    pageTitle: string = 'Album List';
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    filteredAlbums: IAlbum[];
    albums: IAlbum[] = [];

    constructor(private _AlbumService: AlbumService) {

    }

    performFilter(filterBy: IAlbum): IAlbum[] {
        return this.albums.filter((album: IAlbum) => {
            album.id > filterBy.id;
        }
    )
    }
    ngOnInit(): void {
        this._AlbumService.getAlbums()
                .subscribe(albums => {
                    this.albums = albums;
                    this.filteredAlbums = this.albums;
                },
                    error => this.errorMessage = <any>error);
    }
}
