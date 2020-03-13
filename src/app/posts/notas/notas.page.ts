import { Component, OnInit } from '@angular/core';
import { Notas } from './notas.model';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {
  notas: Notas[] = [
    new Notas('1', 'pasear a dolly', 'no olvidar sacar a nuestro gato dolly', 'user1'),
    new Notas('2', 'regar plantas', 'regar plantas cada doce horas', 'user1')
  ];
  constructor() { }

  ngOnInit() {
    console.log('n', this.notas);
  }

}
