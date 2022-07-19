import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  informacionRecibida:any=""

  constructor(private servicio:ServicioService) { 
    servicio.getInformacionGames().subscribe((data)=>{
      this.informacionRecibida=data
    })
  }

  ngOnInit(): void {
  }

}
