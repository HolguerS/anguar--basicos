//import { Component } from '@angular/core';

import { Component } from "@angular/core";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {
heroes: string[]= ['Spiderman','Iroman','Thor','Hul','Chapulin','Batman','Superman'];
heroeBorrado: string='';


borrarHeroe(){

  this.heroeBorrado= this.heroes.shift()|| '';

 /* borrar 1 elemento
 this.heroes.splice(0,1)*/
  /* modificar 1 elemento
 this.heroes.splice(0,1,"Spiderman Negro")
 */
}

}

