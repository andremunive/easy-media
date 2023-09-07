import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FormsModule } from '@angular/forms';

const components = [FiltersComponent, PostsComponent];

@NgModule({
  declarations: [components],
  exports: [...components],
  imports: [CommonModule, FormsModule],
})
export class SharedModule {}
