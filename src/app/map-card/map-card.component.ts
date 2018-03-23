import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { tileLayer, latLng, Map, Layer, LatLngLiteral, LatLngTuple } from 'leaflet';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Location } from '../location';

@Component({
    selector: 'app-map-card',
    templateUrl: './map-card.component.html',
    styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnInit, OnChanges {

    private map: Map;
    private layers: {[key:string]:Layer};
    private map$ =  new ReplaySubject<Map>(1);

    options:{[key:string]:any} = {};

    @Input() location: Location;
    @Input() contrast: string;

    constructor() {
        this.layers = {
            street: tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: null }),
            contrast: tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', { id: 'mapbox.high-contrast', maxZoom: 18, attribution: null })
	};

        let defaultOptions = {
            layers: this.layers.street, //.keys().map(k => this.layers[k]),
            zoom: 8
        };

        this.options = defaultOptions;
    }

    ngOnInit() {
        this.options.center = this.location.coords;
    }

    ngOnChanges(changes: {[key: string]: SimpleChange}) {
        if (changes.contrast !== undefined) {
            this.changeContrast(changes.contrast.currentValue);
        }
    }

    onMapReady(map: Map) {
        //this.map = map;
      this.map$.next(map);
    }

    recenter() {
        this.map.panTo(this.location.coords);
    }

    changeContrast(contrast: string) {
        //if (this.map === undefined) return;
      this.map$.subscribe((map)=>{
        if (contrast === "high") {
            if (!map.hasLayer(this.layers.contrast)) {
                map.addLayer(this.layers.contrast);
            }
        } else {
            map.removeLayer(this.layers.contrast);
        }
      });
    }

}
