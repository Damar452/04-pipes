import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 nombreLower:string = "damar";
 nombreUpper:string = "DAMAR";
 nombreCompleto:string = "dAmaR HErNaNdez";

 fecha:Date = new Date();


}
