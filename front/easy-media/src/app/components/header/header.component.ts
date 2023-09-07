import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      let menuToggle = document.getElementById('menu-toggle');
      let menu = document.getElementById('menu');

      menuToggle?.addEventListener('click', function () {
        menu?.classList.toggle('menu-open');
      });
    });
  }
  menu = document.getElementById('menu');

  toggleMenu() {
    this.menu?.classList.toggle('menu-open');
  }
}
