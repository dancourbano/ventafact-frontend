import { Persona } from './../../_model/Persona';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { PersonaService } from './../../_service/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  dataSource: MatTableDataSource<Persona>
  displayedColumns=['idPersona','nombres','apellidos','acciones']
  constructor(private personaService: PersonaService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.personaService.personaCambio.subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.personaService.mensajeCambio.subscribe(data=>{
      this.snackBar.open(data.toString(),`Aviso`,{duration:2000});
    });
    this.personaService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
  applyFilter(filterValue: string){
    filterValue=filterValue.trim();
    filterValue=filterValue.toLowerCase();
    this.dataSource.filter=filterValue;
  }
  eliminar(idPaciente:number){
    this.personaService.eliminar(idPaciente).subscribe(data=>{
      
      this.personaService.listar().subscribe(data=>{
        this.personaService.mensajeCambio.next('Se elimino');
        this.personaService.personaCambio.next(data);
      })
    });
  }
}
