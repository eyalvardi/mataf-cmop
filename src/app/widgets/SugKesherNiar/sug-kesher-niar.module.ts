import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
        SugKesherNiarComponent
    ],
    providers: [],
})
export class SugKesherNiarModule { }
