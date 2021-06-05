import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HOST } from 'src/app/_shared/var.constant';
import { Injectable } from '@angular/core';
import { Producto } from './../_model/Producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productoCambio=new Subject<Producto[]>();
  mensajeCambio=new Subject<String>();
  url: string= `${HOST}/productos`
  constructor(private http: HttpClient) { }
    listar(){
      return this.http.get<Producto[]>(this.url);
    }
    listarPersonaPorId(id:number){
      return this.http.get<Producto>(`${this.url}/${id}`);
    }
    registrar(producto:Producto){
      return this.http.post(this.url,producto);
    }
    modificar(producto:Producto){
      
      return this.http.put(this.url, producto);
    }
    eliminar(id:number){
      return this.http.delete(`${this.url}/${id}`);
    }
  
}
