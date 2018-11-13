import { Component, OnInit } from '@angular/core';
import { BuscadorCepService } from '../buscador-cep.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep-details',
  templateUrl: './cep-details.component.html',
  styleUrls: ['./cep-details.component.css']
})
export class CepDetailsComponent implements OnInit {
  address: Address = null;

  constructor(
    private buscadorCepService: BuscadorCepService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.buscadorCepService.getCep(params.cep).subscribe(address => {
        this.address = address
      });
    });
  }

}
