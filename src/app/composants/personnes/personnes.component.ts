import { Component, OnInit } from '@angular/core';
import {Personne} from "../../modeles/Personne";
import {ServicePersonneService} from "../../services/service-personne.service";

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  public personnes: Personne[];

  constructor(private svc: ServicePersonneService) {
    this.personnes = this.svc.getPersonnes();

  }

  ngOnInit(): void {
  }

}
