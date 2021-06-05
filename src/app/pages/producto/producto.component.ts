import { DialogoComponent } from './dialogo/dialogo.component';
import { ProductoService } from './../../_service/producto.service';
import { MatTableDataSource, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { Producto } from './../../_model/Producto';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  dataSource: MatTableDataSource<Producto>
  displayedColumns=['idProducto','nombre','marca','acciones']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private productoService: ProductoService, private dialog:MatDialog, private snackBar : MatSnackBar) { }

  ngOnInit() {
    this.productoService.productoCambio.subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
    this.productoService.mensajeCambio.subscribe(data => {      
      this.snackBar.open(data.toString(), 'Aviso', { duration: 2000 });
    });

    this.productoService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
  }
  applyFilter(filterValue: string){
    filterValue=filterValue.trim();
    filterValue=filterValue.toLowerCase();
    this.dataSource.filter=filterValue;
  }
  openDialog(producto: Producto){
    let prod=producto!=null ? producto: new Producto();
    this.dialog.open(DialogoComponent,{
      width: '250px',
      disableClose: true,
      data:prod,

    })
  }
  eliminar(producto: Producto){
    this.productoService.eliminar(producto.idProducto).subscribe( data => {
      this.productoService.listar().subscribe(productos => {
        this.productoService.productoCambio.next(productos);
        this.productoService.mensajeCambio.next("Se elimino");
      });
    });
  }
}
