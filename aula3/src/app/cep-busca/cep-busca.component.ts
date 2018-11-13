import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BuscadorCepService } from '../buscador-cep.service';

@Component({
  selector: 'app-cep-busca',
  templateUrl: './cep-busca.component.html',
  styleUrls: ['./cep-busca.component.css']
})
export class CepBuscaComponent {
  cep: string = '';
  address: Address = null;

  constructor(
    private buscadorCepService: BuscadorCepService,
    private activeRoute: ActivatedRoute
  ) { }

  buscar() {
    this.buscadorCepService.getCep(this.cep).subscribe(address => {
      this.address = address;
    });
  }

}
