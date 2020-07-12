import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos-list',
  template: `
   <div>
     <div>
       <input type="text" #desc> 
       <button (click)="bl.addTask(desc.value)">Add Task</button>
     </div>
     <hr>
    
     <div>
       <div *ngFor="let task of bl.tasks">
         <input type="checkbox">
         {{ task.description }}
         <button>x</button>
       </div>
     </div>
   </div>
   <pre>
       {{bl.tasks | json  }}
     </pre>
  `,
  styles: []
})
export class TodosListComponent {

  constructor( public bl : TodosService ) { }  

}
