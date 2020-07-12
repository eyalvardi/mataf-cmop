import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosListComponent } from './components/todos-list.component';

@NgModule({
    declarations: [
        TodosListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: TodosListComponent }
        ])
    ],
    exports: [

    ],
})
export class TodosModule{

}