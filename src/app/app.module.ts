import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatCardModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MapCardComponent } from './map-card/map-card.component';
import { LeafletComponent } from './leaflet/leaflet.component';

@NgModule({
    declarations: [
        AppComponent,
        MapCardComponent,
        LeafletComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatGridListModule,
        LeafletModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
