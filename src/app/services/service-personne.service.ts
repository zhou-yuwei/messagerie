import { Injectable } from '@angular/core';
import {Personne} from "../modeles/Personne";
import {Message} from "../modeles/Message";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicePersonneService {

  //public messages: Message[];
  private messages$: Observable<Message[]>;
  private messages: Message[] = [];
  //TODO:juste pour ne pas avoir d'erreur à supprimer

  constructor(private http: HttpClient) {

    this.messages$=this.http.get<Message[]>("http://10.103.0.254:8080");

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
  public getMessages():Observable<Message[]>{
    return this.messages$;
  }
  //public getMessages(): Message[] {
    //return this.messages;
  //}

  public getPersonnes(): Personne[] {
    let auteurs: Personne[];
    auteurs = [];
    for (let msg of this.messages) {
      auteurs.push(msg.auteur);
    }
    return auteurs;
  }



}
