import {Personnes} from "./Personnes()";

export class Message {
  private _auteur: Personnes;
  private _message: string;
  public date: Date;

  constructor(auteur: Personnes, message: string) {
    this._auteur = auteur;
    this._message = message;
    this.date = new Date();
  }

  get auteur(): Personnes {
    return this._auteur;
  }

  set auteur(value: Personnes) {
    this._auteur = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
