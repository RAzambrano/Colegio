import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ColegioI} from '../../modelo/colegio';
import {ProfesorI} from '../../inetrface/profesorInterface';
import {AsignaturaI} from '../../inetrface/asignaturaInteface';
import { Observable } from 'rxjs';
/*servicio se encarga de realizar las solicitudes hacia el back*/
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "/api"
  constructor(private http:HttpClient) { }

  /*consulta el nombre del colegio*/
  getColegio():Observable<ColegioI>{
    let direccion = this.url+"/colegio";
      return this.http.get<ColegioI>(direccion);
  }

    /*consulta los profesores*/
  getProfesor():Observable<ProfesorI>{
    let direccion = this.url+"/profesor";
      return this.http.get<ProfesorI>(direccion);
  }
  /*consulta la información de asignaturas por profesor */
  getAsignaturar(val:string):Observable<AsignaturaI>{
    let direccion = this.url+"/Asignatura?nombre="+val;
      return this.http.get<AsignaturaI>(direccion);
  }

}
