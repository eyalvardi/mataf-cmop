import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmop-shell',
  template: `
   <div>
      shell Works!
      <a [routerLink]="['/682']"   routerLinkActive="router-link-active">682</a> |
      <a [routerLink]="['/']"      routerLinkActive="router-link-active">home</a> 
      <a [routerLink]="['/todos']" routerLinkActive="router-link-active">home</a> 
      <hr>
      <router-outlet></router-outlet>
   </div>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
