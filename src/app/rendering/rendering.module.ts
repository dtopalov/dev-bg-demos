import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderingRoutingModule } from './rendering-routing.module';
import { RenderingComponent } from './rendering.component';


@NgModule({
  declarations: [RenderingComponent],
  imports: [
    CommonModule,
    RenderingRoutingModule
  ]
})
export class RenderingModule { }
