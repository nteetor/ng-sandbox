import { Component, OnInit, Input } from '@angular/core';
import { tileLayer, latLng, Map, Layer, LatLngLiteral, LatLngTuple } from 'leaflet';

import { Location } from '../location';

@Component({
    selector: 'app-map-card',
    templateUrl: './map-card.component.html',
    styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnInit {

    private map: Map;
    private layers: {[key:string]:Layer};

    options:{[key:string]:any} = {};

    @Input() location: Location;

    constructor() {
        this.layers = {
            street: tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: null }),
            contrast: tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', { id: 'mapbox.high-contrast', maxZoom: 18, attribution: null })
	};

        let defaultOptions = {
            layers: this.layers.street; //.keys().map(k => this.layers[k]),
            zoom: 8
        };

        this.options = defaultOptions;
    }

    ngOnInit() {
        this.options.center = this.location.coords;
    }

    onMapReady(map: Map) {
        this.map = map;
    }

    recenter() {
        this.map.panTo(this.location.coords);
    }

}
