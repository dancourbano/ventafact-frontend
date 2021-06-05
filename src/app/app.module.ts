import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PersonaComponent } from './pages/persona/persona.component';
import { PersonaEdicionComponent } from './pages/persona/persona-edicion/persona-edicion.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { DialogoComponent } from './pages/producto/dialogo/dialogo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
    PersonaComponent,
    
    PersonaEdicionComponent,
    
    ProductoComponent,
    
    DialogoComponent
  ],
  entryComponents:[DialogoComponent],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
