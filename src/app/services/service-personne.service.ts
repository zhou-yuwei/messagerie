import { Injectable } from '@angular/core';
import {Personnes} from "../modeles/Personnes()";
import {Message} from "../modeles/Message";
import {BoutonsComponent} from "../composants/boutons/boutons.component";

@Injectable({
  providedIn: 'root'
})
export class ServicePersonneService {

  public messages: Message[];

  constructor() {

    this.messages=[];

  }

  public ajouterMessage(nouveauMessage: Message): void{
    this.messages.push(nouveauMessage);
  }

  public rechercher(motClef: string): Message[]{
    let surmessages: Message[];
    surmessages=[];
    for (let msg of this.messages) {
      if(msg.message.search(motClef)!==-1)
        surmessages.push(msg);
    }
    return surmessages;
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getPersonnes(): Personnes[] {
    let auteurs: Personnes[];
    auteurs = [];
    for (let msg of this.messages) {
      auteurs.push(msg.auteur);
    }
    return auteurs;
  }



}
