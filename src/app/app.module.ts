import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* ng serve -o para arrancar el proyecto */

/* ng g class cliente, crea una clase que se llama cliente */

/* ng generate component clientes => Este es el comando para crear una nueva directiva.
   Crea la carpeta "clientes" con sus respectivos .css, .html, y .ts
   En este caso la directiva se llama "clientes" :)  */
