import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  isLogged:boolean = false;
  experiencias: Experiencia[]=[]; //se llama al modelo que es un array
 
  constructor(private tokenService: TokenService, private sExperiencia: ExperienciaService) {  }

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.experiencias=data});    
  }


  delete(id:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          alert("Experiencia eliminada correctamente")
          this.cargarExperiencia();
        }, err =>{
          alert("no se pudo eliminar la experiencia")
        })
    }}
}

