import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { ProfesorI } from '../../inetrface/profesorInterface';
import { Profesor } from '../../modelo/profesor';
import { Estudiante } from '../../modelo/estudiante';
import { AsignaturaI } from '../../inetrface/asignaturaInteface';
import { Asignatura } from '../../modelo/asignatura';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores:Profesor[];
  asignaturas:Asignatura[];
  lista:string;

  constructor(private api:ApiService, private router:Router) {
    this.profesores=[];
    this.asignaturas=[];
    this.lista="";
   }



  ngOnInit(): void {
    this.api.getProfesor().subscribe(data=>{
      let userResponse:ProfesorI=data;
      this.profesores = data.data.rows;
    })

  }
myFn(val:string){
     this.api.getAsignaturar(val).subscribe(data=>{
    let userResponse:AsignaturaI=data;
    this.asignaturas = data.data.rows;
    console.log(this.asignaturas);
    })
  }

  estudiantes(studiantes:Estudiante[]):string{
    this.lista="";
    for (let studiante of studiantes){
      this.lista=studiante.nombre+", "+this.lista;
    }
    return this.lista;
  }

}
