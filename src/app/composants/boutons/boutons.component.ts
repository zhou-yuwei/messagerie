import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutons',
  templateUrl: './boutons.component.html',
  styleUrls: ['./boutons.component.css']
})
export class BoutonsComponent implements OnInit {
  public pseudo: string;
  constructor() {
    this.pseudo="";
  }

  ngOnInit(): void {
  }

}
