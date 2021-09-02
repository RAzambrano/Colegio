import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {ColegioI} from '../../modelo/colegio'

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  constructor(private api:ApiService) { }

  nombre:string ="";

  ngOnInit(): void {
    console.log("hola mundo");
    this.api.getColegio().subscribe(data=>{
      let userResponse:ColegioI=data;
      console.log(data);
      this.nombre=userResponse.data.rows[0].nombre;
    })

  }
}
