import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.module';

@Injectable()
export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is a test', 
            'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg?w=640',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]
        ),
        new Recipe(
            'Another Test Recipe',
            'This is a test', 
            'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg?w=640',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',1)
            ]
        )
      ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}