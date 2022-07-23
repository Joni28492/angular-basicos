import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],//que contiene este modulo/componentes
    //cosas que queremos visibles
    exports: [
        ListadoComponent
    ],
    imports: [ //solo modulos
        CommonModule
    ]
})
export class HeroesModule{}