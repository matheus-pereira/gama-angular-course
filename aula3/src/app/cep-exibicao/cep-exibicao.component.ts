import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cep-exibicao',
  templateUrl: './cep-exibicao.component.html',
  styleUrls: ['./cep-exibicao.component.css']
})
export class CepExibicaoComponent implements OnInit {
  @Input() address: Address;
  
  constructor() { }

  ngOnInit() {
  }

}
