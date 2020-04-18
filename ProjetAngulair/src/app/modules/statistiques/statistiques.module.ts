import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiquesRoutingModule } from './statistiques-routing.module';
import { StatistiquesComponent } from './statistiques.component';


@NgModule({
  declarations: [StatistiquesComponent],
  imports: [
    CommonModule,
    StatistiquesRoutingModule
  ]
})
export class StatistiquesModule { }
