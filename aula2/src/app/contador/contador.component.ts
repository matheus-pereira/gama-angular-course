import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  valorAtual = 0;
  contadorSubscription: Subscription = null;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.contadorSubscription = this.counterService.valorDoContador.subscribe((value) => this.valorAtual = value);
  }

  aumentarContador() {
    this.counterService.aumentar();
  }

  diminuirContador() {
    this.counterService.diminuir();
  }

  onUnsubscribeClick() {
    this.contadorSubscription.unsubscribe();
  }

}
