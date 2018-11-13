import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { CepDetailsComponent } from './cep-details/cep-details.component';
import { CepExibicaoComponent } from './cep-exibicao/cep-exibicao.component';
import { CepBuscaComponent } from './cep-busca/cep-busca.component';
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
    {
        path: 'cep/:cep',
        component: CepDetailsComponent
    },
    {
        path: 'cep',
        component: CepBuscaComponent
    }
];

@NgModule({
    declarations: [
        CepDetailsComponent,
        CepExibicaoComponent,
        CepBuscaComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(appRoutes),
        FormsModule
    ],
    exports: [
        CepDetailsComponent,
        CepExibicaoComponent,
        CepBuscaComponent
    ]
})
export class CepModule { }