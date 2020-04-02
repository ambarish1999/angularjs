import { Component, OnInit } from '@angular/core';
import { DISHES } from '../shared/dishes';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  //array of js objects
  
  dishes:Dish[];
  selectedDish:Dish;
  onSelect(dish:Dish){
    this.selectedDish=dish;  
  }

  constructor(private dishService : DishService) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe((dishes)=> this.dishes=dishes);
  }

}
