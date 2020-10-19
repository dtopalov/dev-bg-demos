import { CustomPreloadingStrategy } from './custom-preloading.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent
  }, {
    path: 'rendering',
    loadChildren: () => import('./rendering/rendering.module').then(m => m.RenderingModule),
    data: { preload: true, delay: 3000 }
  }, {
    path: 'cd',
    loadChildren: () => import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule),
    data: { preload: true, delay: 6000 }
  }, {
    path: 'resolved-data',
    loadChildren: () => import('./resolved-data/resolved-data.module').then(m => m.ResolvedDataModule),
    data: { preload: true, delay: 9000 }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, /* { preloadingStrategy: PreloadAllModules} */ /* { preloadingStrategy: CustomPreloadingStrategy} */)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
