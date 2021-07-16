import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre:string = "Damar";
  genero:string = "masculino";

  mapa = {
    'masculino' : 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural

  clientes: string[] = ["Maria", "Pedro", "Damar", "Sofia"];

  clientesMapa = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarGenero(){
    this.nombre = "Maria";
    this.genero = "femenino";
  }

  quitarClientes(){
    this.clientes.shift();
  }


  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: "sincelejo, sucre"
  }

  // heroes

  heroes = [
    {
      nombre:'superman',
      vuela: true
    },
    {
      nombre:'batman',
      vuela: false
    },
    {
      nombre:'thor',
      vuela:true
    }
  ]



  // Asyn Pipe

  miObservable = interval(1000); // 0,1,2,3,4,5,6

  valorPromesa = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Tenemos data de promesa')
  }, 3500);
  })


}
