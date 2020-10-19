import { TodoResolve } from './todos.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResolvedDataComponent } from './resolved-data.component';

const routes: Routes = [
  { path: ':id', component: ResolvedDataComponent, /* resolve: {todo: TodoResolve} */ },
  { path: '', component: ResolvedDataComponent, /* resolve: {todo: TodoResolve} */ }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodoResolve]
})
export class ResolvedDataRoutingModule { }
