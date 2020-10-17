import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';


@NgModule({
  declarations: [ChangeDetectionComponent],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule
  ]
})
export class ChangeDetectionModule { }
