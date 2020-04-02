import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
}) 
export class DishService {

  constructor() { }

  // getDishes(): Promise<Dish[]> {
  //   return Promise.resolve(DISHES);
  // }

  // getDish(id: string): Promise<Dish> {
  //   return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  // }

  // getFeaturedDish(): Promise<Dish> {
  //   return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  // }

  // getDishes(): Promise<Dish[]> {
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(DISHES), 2000);
  //   });
  // }

  // getDish(id: string): Promise<Dish> {
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
  //   });
  // }

  // getFeaturedDish(): Promise<Dish> {
  //   return  new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
  //   });
  // }
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id:string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {//check why any is used
    return of(DISHES.map(dish => dish.id ));
  }
}
