import { Component, computed, effect, signal } from '@angular/core';
import { CocktailDetails } from './components/cocktail-details/cocktail-details';
import { CocktailsList } from './components/cocktails-list/cocktails-list';
import { Cocktail } from '../../shared/interfaces';
import { cocktails } from '../../shared/data';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailDetails, CocktailsList],
  templateUrl: './cocktails.html',
  styleUrl: './cocktails.css',
})
export class Cocktails {
 cocktails = signal<Cocktail[]>(cocktails);
 selectedCocktail = signal<Cocktail>(this.cocktails()[0])





selectedCocktailName = computed(() => this.selectedCocktail().name)

selectCocktail(cocktailName:string){
  const newCocktail = this.cocktails().find( ({name}) => name === cocktailName )
  if(newCocktail){
    this.selectedCocktail.set(newCocktail)
  }
}





 
}
