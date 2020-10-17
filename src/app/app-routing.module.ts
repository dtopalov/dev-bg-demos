import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'rendering',
    loadChildren: () => import('./rendering/rendering.module').then(m => m.RenderingModule)
  },
  {
    path: 'cd',
    loadChildren: () => import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
