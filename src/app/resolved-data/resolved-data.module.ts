import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolvedDataRoutingModule } from './resolved-data-routing.module';
import { ResolvedDataComponent } from './resolved-data.component';


@NgModule({
  declarations: [ResolvedDataComponent],
  imports: [
    CommonModule,
    ResolvedDataRoutingModule
  ]
})
export class ResolvedDataModule { }
