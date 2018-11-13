import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  valorAtual: Observable<number>;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.valorAtual = this.counterService.valorDoContador;
  }

  aumentarContador() {
    this.counterService.aumentar();
  }

  diminuirContador() {
    this.counterService.diminuir();
  }

  onUnsubscribeClick() {
    // this.contadorSubscription.unsubscribe();
  }

}
