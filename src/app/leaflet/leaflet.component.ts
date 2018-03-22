import { Component, OnInit } from '@angular/core';

import { tileLayer, latLng, circle } from 'leaflet';


@Component({
    selector: 'app-leaflet',
    templateUrl: './leaflet.component.html',
    styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent implements OnInit {

    options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
	],
        zoom: 8,
        center: latLng(42.0354, -88.2826)
    }

    layersControl = {
        overlays: {
            'Big Circle': circle([42.0354, -88.2826], { radius: 5000 });
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
