import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
show = signal(false);
  navigations = [
    {
      path: '#',
      name: 'Liste des cocktails',
    },
    {
      path: '#',
      name: 'Panier',
    },
  ];

  toggleMenu(){
    this.show.update((s)=> !s)
  }
}
