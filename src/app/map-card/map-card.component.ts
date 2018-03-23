import { Component, OnInit, Input } from '@angular/core';
import { Map, tileLayer, latLng } from 'leaflet';

import { Location } from '../location';

@Component({
    selector: 'app-map-card',
    templateUrl: './map-card.component.html',
    styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnInit {

    private map: Map;
    private options;

    @Input() location: Location;

    constructor() {
        let defaultOptions = {
            layers: [
                tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
	    ],
            zoom: 8
        }

        this.options = defaultOptions;
    }

    ngOnInit() {
        this.options.center = latLng(...this.location.coords);
    }

    onMapReady(map: Map) {
        this.map = map;
    }

    recenter() {
        this.map.panTo(latLng(...this.location.coords));
    }

}
