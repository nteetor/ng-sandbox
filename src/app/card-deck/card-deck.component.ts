import { Component, OnInit } from '@angular/core';

import { LOCATIONS } from '../mock-locations';

@Component({
    selector: 'app-card-deck',
    templateUrl: './card-deck.component.html',
    styleUrls: ['./card-deck.component.css']
})
export class CardDeckComponent implements OnInit {

    locations = LOCATIONS;

    constructor() {
    }

    ngOnInit() {
    }

}
