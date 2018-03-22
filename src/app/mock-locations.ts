import { tileLayer, latLng } from 'leaflet';

import { Location } from './mock-locations';

export const LOCATIONS: Location[] = [
    { id: 1,
      name: "Elgin",
      options: {
          layers: [
              tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
	  ],
          zoom: 8
          center: latLng(42.0354, -88.2826)
      }
    },
    { id: 2,
      name: "Bethesda",
      options: {
          layers: [
              tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
	  ],
          zoom: 8
          center: latLng(38.984653, -77.094711)
      }
    }
];
