import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ShellModule } from './shell/shell.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SugKesherNiarModule } from '@cmop/widgets/SugKesherNiar';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    ShellModule,

    // CMOP widgets
    SugKesherNiarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
