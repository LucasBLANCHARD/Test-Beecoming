import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { listeService } from '../services/liste.service';

@Component({
  selector: 'app-edit-ville',
  templateUrl: './edit-ville.component.html',
  styleUrls: ['./edit-ville.component.css']
})
export class EditVilleComponent implements OnInit {



  constructor(private listeService: listeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const nom = form.value['nom'];
    const pays = form.value['pays'];
    const population = form.value['population'];
    const latitude = form.value['latitude'];
    const longitude = form.value['longitude'];
    this.listeService.addVille(nom, pays, population, latitude, longitude);
    this.router.navigate(['/liste']);
  }
}
