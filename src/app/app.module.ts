import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatCardModule, MatGridListModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MapCardComponent } from './map-card/map-card.component';
import { CardDeckComponent } from './card-deck/card-deck.component';

@NgModule({
    declarations: [
        AppComponent,
        MapCardComponent,
        CardDeckComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatButtonToggleModule,
        LeafletModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
