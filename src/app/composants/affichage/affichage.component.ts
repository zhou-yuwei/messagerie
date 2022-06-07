import { Component, OnInit } from '@angular/core';
import {Message} from "../../modeles/Message";
import {ServicePersonneService} from "../../services/service-personne.service";

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  public messages: Message[];
  public motClef: string;

  constructor(private svc: ServicePersonneService) {
    this.messages = this.svc.getMessages();
    this.motClef="";
  }

  ngOnInit(): void {
  }

  clicSurRecherche() {
    this.messages = this.svc.rechercher(this.motClef);
    console.log(this.motClef);
    console.log(this.messages);
  }
}
