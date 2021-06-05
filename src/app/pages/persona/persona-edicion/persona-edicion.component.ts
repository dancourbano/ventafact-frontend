import { Persona } from './../../../_model/Persona';
import { PersonaService } from './../../../_service/persona.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-persona-edicion',
  templateUrl: './persona-edicion.component.html',
  styleUrls: ['./persona-edicion.component.css']
})
export class PersonaEdicionComponent implements OnInit {
  id: number;
  form: FormGroup;
  edicion: boolean=false;
  persona: Persona;
  constructor(private route: ActivatedRoute,private router:Router, private personaService: PersonaService) { 
    this.form=new FormGroup({
      'id': new FormControl(0),
      'nombres': new FormControl(''),
      'apellidos': new FormControl('')
    });
  }

  ngOnInit() {
    this.persona=new Persona;
    this.route.params.subscribe((params: Params)=>{
      this.id=params['id'];
      this.edicion=params['id']!=null;
      this.initForm();
    });
  }
  initForm(){
    if(this.edicion){
      //cargar data
      this.personaService.listarPersonaPorId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          'id': new FormControl(data.idPersona),
          'nombres': new FormControl(data.nombres),
          'apellidos': new FormControl(data.apellidos)
        });
      })
    }
  }
  operar(){
    this.persona.idPersona=this.form.value['id'];
    this.persona.nombres=this.form.value['nombres'];
    this.persona.apellidos=this.form.value['apellidos'];
    if(this.edicion){
      this.personaService.modificar(this.persona).subscribe(data=>{
        this.personaService.listar().subscribe(personas=>{
          this.personaService.personaCambio.next(personas);
          this.personaService.mensajeCambio.next('Se Modifico');
        })
      });
    }else{
      this.personaService.registrar(this.persona).subscribe(data=>{
        this.personaService.listar().subscribe(personas=>{
          this.personaService.personaCambio.next(personas);
          this.personaService.mensajeCambio.next('Se Registro');
        })
      });
    }
    this.router.navigate(['persona']);
  }

}
