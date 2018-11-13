import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { map, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorAtual = 0;
  contadorSubscription: Subscription = null;

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
    this.contadorSubscription = this.counterService.valorDoContador
      .pipe(debounceTime(300), map((value) => value * 2))
      .subscribe((value) => {
        this.valorAtual = value;
        if (value > 10) this.contadorSubscription.unsubscribe();
      });
  }
}
