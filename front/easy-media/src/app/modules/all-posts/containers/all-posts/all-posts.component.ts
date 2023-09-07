import { Component } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent {
  byDate = true;
  byWord = true;

  filterByWord(event: string) {
    console.log(event);
  }
  filterByDate(event: string) {}
}
