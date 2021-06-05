import { Persona } from './../_model/Persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaCambio=new Subject<Persona[]>();
  mensajeCambio=new Subject<String>();
  url:string=`${HOST}/personas`;
  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get<Persona[]>(this.url);
  }
  listarPersonaPorId(id:number){
    return this.http.get<Persona>(`${this.url}/${id}`);
  }
  registrar(persona:Persona){
    return this.http.post(this.url,persona);
  }
  modificar(persona:Persona){
    
    return this.http.put(this.url, persona);
  }
  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
