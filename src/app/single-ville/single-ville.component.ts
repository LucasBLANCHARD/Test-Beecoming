import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { listeService } from '../services/liste.service';

@Component({
  selector: 'app-single-ville',
  templateUrl: './single-ville.component.html',
  styleUrls: ['./single-ville.component.css']
})
export class SingleVilleComponent implements OnInit {



  id: number = 0;
  nom: string = 'Ville';
  pays: string = 'Pays';
  population: number= 0;
  latitude: number= 0;
  longitude: number= 0;


  constructor(private listeService: listeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.id = this.listeService.getVilleById(+id).id;
    this.nom = this.listeService.getVilleById(+id).nom;
    this.pays = this.listeService.getVilleById(+id).pays;
    this.population = this.listeService.getVilleById(+id).population;
    this.latitude = this.listeService.getVilleById(+id).latitude;
    this.longitude = this.listeService.getVilleById(+id).longitude;

  }


  onEdit(form: NgForm){
    const nom = form.value['nom'];
    const pays = form.value['pays'];
    const population = form.value['population'];
    const latitude = form.value['latitude'];
    const longitude = form.value['longitude'];
    this.listeService.editVille(nom, pays, population, latitude, longitude);
    this.router.navigate(['/liste']);
  }


  onRemove(form: NgForm) {
    this.listeService.removeVille(this.id);
    console.log(`ville : ${this.nom}`)
    this.router.navigate(['/liste']);
  }

}

