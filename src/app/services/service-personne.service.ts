import { Injectable } from '@angular/core';
import {Personnes} from "../modeles/Personnes()";
import {Message} from "../modeles/Message";

@Injectable({
  providedIn: 'root'
})
export class ServicePersonneService {

  public messages: Message[];

  constructor() {

    let auteur = new Personnes("Zhou", "Yuwei");
    let auteur2 = new Personnes("Li", "Antoine");
    let message = new Message(auteur, "Salut, ça va ?");
    let message2 = new Message(auteur2, "Ca va, et toi ?");
    this.messages = [message, message2];
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
