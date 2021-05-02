import {Component} from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
        selector:'app-contador',
        template: `

        <h1> {{titulo}}</h1>
        <h3>La Base es <strong>{{acumulador}}</strong></h3>

        <button (click)="Base(+acumulador)">+{{acumulador}}</button>

        <span>{{numero}}</span>

        <button (click)="Base(-acumulador)">- {{acumulador}} </button>

        `
        })

export class ContadorComponent{

titulo = 'Contador App';
numero: number = 5;
acumulador:number=5;

Base(valorActual: number){
this.numero+=valorActual;

}
 
}