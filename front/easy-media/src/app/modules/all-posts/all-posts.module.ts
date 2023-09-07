import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPostsRoutingModule } from './all-posts-routing.module';
import { AllPostsComponent } from './containers/all-posts/all-posts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllPostsComponent],
  imports: [CommonModule, AllPostsRoutingModule, SharedModule],
})
export class AllPostsModule {}
