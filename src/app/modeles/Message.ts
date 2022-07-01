import {Personne} from "./Personne";

export class Message {
  private _auteur: Personne;
  private _message: string;
  public date: Date;

  constructor(auteur: Personne, message: string) {
    this._auteur = auteur;
    this._message = message;
    this.date = new Date();
  }

  get auteur(): Personne {
    return this._auteur;
  }

  set auteur(value: Personne) {
    this._auteur = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
