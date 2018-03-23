import { Component, Input } from '@angular/core';

import { LOCATIONS } from '../mock-locations';

@Component({
    selector: 'app-card-deck',
    templateUrl: './card-deck.component.html',
    styleUrls: ['./card-deck.component.css']
})
export class CardDeckComponent {

    locations = LOCATIONS;

    @Input() contrast: string;

    constructor() {
    }
}
