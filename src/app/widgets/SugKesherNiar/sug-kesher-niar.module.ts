import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user.component';
import { SugKesherNiarComponent } from './components/sug-kesher-niar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '' , component: SugKesherNiarComponent }
        ])
    ],
    exports: [
        SugKesherNiarComponent
    ],
    declarations: [
        SugKesherNiarComponent,
        UserComponent
    ],
    providers: [],
})
export class SugKesherNiarModule { }
