import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foods: Food[];

  constructor() {
    this.foods = [];

    const food1 = new Food('Lasanha', 1500);
    const food2 = new Food('Bitoque', 750);
    const food3 = new Food('Bolachas', 3500);

    this.foods.push(food1, food2, food3);
  }

  getFoods(): Food[] {
    return this.foods;
  }

  getSortedFoodsByKcalAsc(): Food[] {
    return [...this.foods].sort((food1, food2) => food1.kcal - food2.kcal);
  }

  getTotalOfKcals(): number {
    return this.foods.reduce((accumulator, food) => accumulator + food.kcal, 0);
  }

  addExclamationPointToName(): Food[] {
    return this.foods.map((food) => {
      const changedFood = { ...food };
      changedFood.name += '!';
      return changedFood;
    });
  }
}
