import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './containers/all-posts/all-posts.component';

const routes: Routes = [
  {
    path: '',
    component: AllPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPostsRoutingModule {}
