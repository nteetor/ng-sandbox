import { Component, OnInit, Input } from '@angular/core';

import { Location } from '../location';
import { LOCATIONS } from '../mock-locations';

@Component({
    selector: 'app-map-card',
    templateUrl: './map-card.component.html',
    styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnInit {

    locations = LOCATIONS;

    constructor() {
    }

    ngOnInit() {
    }

}
