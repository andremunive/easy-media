import { Component, Input } from '@angular/core';
import { PostModel } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  @Input() postData: PostModel = {
    title: 'No title found',
    message: 'No message found',
    date: 'No date found',
    author: 'No author found',
  };
}
