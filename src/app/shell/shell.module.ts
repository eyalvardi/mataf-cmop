import { TodosModule } from './../widgets/todos/todos.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShellComponent } from './components/shell.component';
import { LoginComponent } from './components/login.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '' , pathMatch: 'full',component: LoginComponent },
            { path: '682' , loadChildren  : ()=> import('@cmop/widgets/SugKesherNiar').then(m=>m.SugKesherNiarModule)},
            { path: 'todos' , loadChildren: ()=> import('@cmop/widgets/todos').then( m => m.TodosModule)}
        ]),
        
    ],
    exports: [
        LoginComponent,
        ShellComponent
    ],
    declarations: [
        LoginComponent,
        ShellComponent
    ],
    providers: [],
})
export class ShellModule { }
