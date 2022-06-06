import { Component, OnInit } from '@angular/core';
import {Personnes} from "../../modeles/Personnes()";
import {ServicePersonneService} from "../../services/service-personne.service";

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  public personnes: Personnes[];

  constructor(private svc: ServicePersonneService) {
    this.personnes = this.svc.getPersonnes();

  }

  ngOnInit(): void {
  }

}
