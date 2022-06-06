import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent implements OnInit {
public titre: string;
public google: string;

  constructor() {
    this.titre = "MESSAGERIE";
    this.google="http://www.google.fr";
  }

  ngOnInit(): void {
  }

  clicSurBouton(): void {
    console.log("click");
    this.titre = "changer de titre";
  }
}
