import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  foods: Food[];
  totalOfKcals: number;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getFoods();
    this.totalOfKcals = this.foodService.getTotalOfKcals();
  }

  onSortClick(): void {
    this.foods = this.foodService.getSortedFoodsByKcalAsc();
  }

  onAddExclamationClick(): void {
    this.foods = this.foodService.addExclamationPointToName();
  }

  onResetClick(): void {
    this.foods = this.foodService.getFoods();
  }
}
