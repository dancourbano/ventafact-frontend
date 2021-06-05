import { ProductoService } from './../../../_service/producto.service';
import { Producto } from './../../../_model/Producto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Injectable } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {
  producto: Producto;
  constructor(private dialogRef: MatDialogRef<DialogoComponent>,@Inject(MAT_DIALOG_DATA)public data: Producto, private productoService: ProductoService) { }

  ngOnInit() {
    this.producto=new Producto();
    this.producto.idProducto=this.data.idProducto;
    this.producto.nombre=this.data.nombre;
    this.producto.marca=this.data.marca;
  }
  cancelar(){
    this.dialogRef.close();
  }
  operar(){
    if (this.producto != null && this.producto.idProducto > 0) {
      this.productoService.modificar(this.producto).subscribe(data => {
        this.productoService.listar().subscribe(productos => {
          this.productoService.productoCambio.next(productos);
          this.productoService.mensajeCambio.next("Se modifico");
        });
      });
    } else {
      this.productoService.registrar(this.producto).subscribe(data => {        
          this.productoService.listar().subscribe(productos => {
            this.productoService.productoCambio.next(productos);
            this.productoService.mensajeCambio.next("Se registro");
          });        
      });
    }
    this.dialogRef.close();
  }
}
