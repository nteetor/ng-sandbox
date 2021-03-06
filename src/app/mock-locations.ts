import { LatLngTuple } from 'leaflet';

import { Location } from './location';

export const LOCATIONS: Location[] = [
    { id: 1,
      name: "Elgin",
      coords: [42.0354, -88.2826] as LatLngTuple
    },
    { id: 2,
      name: "Bethesda",
      coords: [38.984653, -77.094711] as LatLngTuple
    }
];
