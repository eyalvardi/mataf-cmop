import { BL682Service } from './../services/bl_682.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sug-kesher-niar',
  template: `
   <div>
      <h2>sug-kesher-niar Works!</h2>
      <button (click)="bl.getUsers()">Get Users</button>

      <hr>
      <cmop-user *ngFor="let u of bl.users" [source]="u"></cmop-user>
     
   </div>
  `,
  styles: [`
    h2{ 
      background-color: yellow;
    }
  `]
})
export class SugKesherNiarComponent implements OnInit {

  constructor(public bl : BL682Service) { }

  ngOnInit() {
  }

}
