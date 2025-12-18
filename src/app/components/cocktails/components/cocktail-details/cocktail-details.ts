import { Component, input, signal } from '@angular/core';
import { Cocktail } from '../../../../shared/interfaces';

@Component({
  selector: 'app-cocktail-details',
  imports: [],
  templateUrl: './cocktail-details.html',
  styleUrl: './cocktail-details.css',
})
export class CocktailDetails {
   cocktail = input.required<Cocktail>();
}
