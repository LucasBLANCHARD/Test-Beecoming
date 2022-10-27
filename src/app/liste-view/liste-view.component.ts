import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { listeService } from '../services/liste.service';

@Component({
  selector: 'app-liste-view',
  templateUrl: './liste-view.component.html',
  styleUrls: ['./liste-view.component.css']
})
export class ListeViewComponent implements OnInit {
  villes: any[];
  villeSubscription: Subscription;


  constructor(private listeService: listeService) {

  }

  ngOnInit(): void {
    this.villeSubscription = this.listeService.villeSubject.subscribe(
      (villes: any[]) => {
        this.villes = villes;
      }
    );
    this.listeService.emitVilleSubject();
  }

}
