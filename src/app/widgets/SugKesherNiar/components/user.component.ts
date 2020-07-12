import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmop-user',
  template: `    
     <img [src]="user.picture.thumbnail">
     <span>
       {{ user.name.first }}
       {{ user.name.last }}
     </span>   
  `,
  styles: [`
    :host{
      display: grid;
      grid-template-columns: 50px auto;
      grid-gap: 10px
      justify-items: center;
      margin : 8px;
      border-radius: 20px;
      border:1px solid black;
    }
    img { 
      border-radius: 50px;
    }    
  `]
})
export class UserComponent implements OnInit {

  @Input('source') user: cmop.User;

  constructor() { }

  ngOnInit() {
  }

}
