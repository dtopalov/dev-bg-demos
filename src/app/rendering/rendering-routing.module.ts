import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenderingComponent } from './rendering.component';

const routes: Routes = [{ path: '', component: RenderingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderingRoutingModule { }
