import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  valordelLink:string=""
  informacionApiBusqueda:any=""

  constructor(private route:ActivatedRoute, private servicio:ServicioService) { 
    this.route.params.subscribe((data:any)=>{
      this.valordelLink=data.id
      this.servicio.getInformacionBusqueda(this.valordelLink).subscribe((info:any)=>{
       this.informacionApiBusqueda=info 
      })
    })
  }

  ngOnInit(): void {
  }

}
