import { Component, OnInit, Input } from '@angular/core';
import { tileLayer, latLng, Map, LatLngLiteral, LatLngTuple } from 'leaflet';

import { Location } from '../location';

@Component({
    selector: 'app-map-card',
    templateUrl: './map-card.component.html',
    styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnInit {

    private map: Map;

    options:{[key:string]:any} = {};

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
      //TODO or make coords have type of LatLngTuple
        this.options.center = latLng(this.location.coords as LatLngTuple);
    }

    onMapReady(map: Map) {
        this.map = map;
    }

    recenter() {
        this.map.panTo(latLng(this.location.coords as LatLngTuple));
    }

}
