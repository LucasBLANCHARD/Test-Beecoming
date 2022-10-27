import { Component, AfterViewInit  } from '@angular/core';
import * as L from 'leaflet';
import { listeService } from '../services/liste.service';



@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements AfterViewInit {
  carte;

  constructor(private listeService: listeService) {

  }


  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  })

   // Fonction d'initialisation du composant.
   ngAfterViewInit(): void {
     this.createMap();

     this.getPosition().then(pos=>
      {
         this.markerPosition(pos);
      });
   }

   getPosition(): Promise<any>
   {
     return new Promise((resolve, reject) => {

       navigator.geolocation.getCurrentPosition(resp => {

           resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
         },
         err => {
           reject(err);
         });
     });

   }


   createMap() {
    const carteCapitales = {
      lat: 48.856614,
      lng: 2.3522219,
    };

    const zoomLevel = 5;

    this.carte = L.map('carte', {
      center: [carteCapitales.lat, carteCapitales.lng],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 4,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.carte);

    for (let ville of this.listeService.villes) {
      console.log(`ville : ${ville.latitude}, ${ville.longitude}`)
    this.addMarker(ville, ville);
      }

  }

   addMarker(coords, text){
    const marker = L.marker([coords.latitude,coords.longitude], { icon: this.smallIcon});
    marker.addTo(this.carte).bindPopup("Ville : "+text.nom+" Pays : "+text.pays+"<br />"+
    " Population : "+text.population+" d'habitants "+"<br />"+ " Coordonnées : "+text.latitude+" , "+text.longitude);
   }
   markerPosition(pos){
    const marker = L.marker([pos.lat, pos.lng], { icon: this.smallIcon});
    marker.addTo(this.carte).bindPopup("Votre position");
   }

}
