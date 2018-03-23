import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatToolbarModule, MatCardModule, MatGridListModule, MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MapCardComponent } from './map-card/map-card.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { NavService } from './nav.service';

@NgModule({
    declarations: [
        AppComponent,
        MapCardComponent,
        CardDeckComponent
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        LeafletModule
    ],
    providers: [
        NavService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
