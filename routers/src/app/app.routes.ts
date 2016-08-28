import {provideRouter, RouterConfig} from '@angular/router';
import {AlbumComponent} from "./album/album.component";
import {ArchiveComponent} from "./archive/archive.component";
import {AppComponent} from "./app.component";

export const routes:RouterConfig = [
     {path: 'album',  component: AlbumComponent},
     {path: 'archive', component: ArchiveComponent},
     {path: '', component: AlbumComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];