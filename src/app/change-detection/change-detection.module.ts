import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { PipesComponent } from './pipes.component';
import { MyPipe } from './sample.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChangeDetectionComponent, PipesComponent, MyPipe],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    FormsModule
  ]
})
export class ChangeDetectionModule { }
