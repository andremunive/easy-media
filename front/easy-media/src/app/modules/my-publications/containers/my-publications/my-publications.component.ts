import { Component } from '@angular/core';

@Component({
  selector: 'app-my-publications',
  templateUrl: './my-publications.component.html',
  styleUrls: ['./my-publications.component.scss'],
})
export class MyPublicationsComponent {
  byDate: boolean = true;

  filterByDate(event: string) {}
}
