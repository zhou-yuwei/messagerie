import { Component, OnInit } from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";
import {ServicePersonneService} from "../../services/service-personne.service";

@Component({
  selector: 'app-boutons',
  templateUrl: './boutons.component.html',
  styleUrls: ['./boutons.component.css']
})
export class BoutonsComponent implements OnInit {
  public message: string[];
  private recherche: string;
  constructor(private svc:ServicePersonneService) {
    this.message=[];
    this.recherche= "";
  }

  ngOnInit(): void {
  }

  clicSurForm(valuesFormulaire: any): void {

    let nouveauMessage=new Message(new Personne(valuesFormulaire.nom, valuesFormulaire.prenom), valuesFormulaire.msg);
    this.svc.ajouterMessage(nouveauMessage);
    console.log(nouveauMessage);
  }

}
