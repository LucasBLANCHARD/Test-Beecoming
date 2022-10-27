import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { listeService } from '../services/liste.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input() villeName: string;
  @Input() villePays: string;
  @Input() villePop: number;
  @Input() villeLat: number;
  @Input() villeLng: number;
  @Input() indexOfville: number;
  @Input() id: number;




  constructor(private listeService: listeService){

  }
    ngOnInit(): void {
    }
  }


