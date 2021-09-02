import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {ColegioI} from '../../modelo/colegio'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) { }
  nombre:string ="";

  ngOnInit(): void {
    this.api.getColegio().subscribe(data=>{
      let userResponse:ColegioI=data;
      console.log(data);
      this.nombre=userResponse.data.rows[0].nombre;
    })

  }

}
