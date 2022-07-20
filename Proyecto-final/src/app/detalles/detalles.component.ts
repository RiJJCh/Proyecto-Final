import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  valorDelLink:string=""
  informacionRecibida:any="" 

  constructor(private route:ActivatedRoute, private servicio:ServicioService) { 
    this.route.params.subscribe((data:any)=>{
      this.valorDelLink=data.value
      this.servicio.getInformacionDetallada(this.valorDelLink).subscribe((info:any)=>{
        this.informacionRecibida=info
      })
    })
  }

  ngOnInit(): void {
  }

}
