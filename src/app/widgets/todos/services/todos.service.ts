import { Injectable } from '@angular/core';
import { TaskModel } from '../models/todo.model';

@Injectable({ providedIn : 'root'})
export class TodosService {

    tasks : TaskModel [] = [];    

    addTask( desc : string ){
        const task = new TaskModel(desc);
        this.tasks.push(task);
    }
}