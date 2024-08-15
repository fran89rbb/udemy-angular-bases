import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  deleteHero?: string;

  heroNames: string[] = ['spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  removeLastName() {
    this.deleteHero = this.heroNames.pop();
  };

}
