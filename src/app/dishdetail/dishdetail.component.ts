import { Component, OnInit , Input} from '@angular/core';
import { Dish } from '../shared/dish';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators'
//params gives me access to the router parameters
//activated route gives us access to the route
// location enables me to track the  loaction of the page in the history of my browser,its also a service

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  // @Input() //used to take input from another component, here value comes from the menu component
  // dish:Dish; //the value comes and get stored in dish and is available to dish detail's template file
  dish:Dish;
  dishId:String[];
  prev:string;
  next:string;
  dishIds:string[];

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  // ngOnInit(): void {
  //   let id = this.route.snapshot.params['id'];
  //   this.dishservice.getDish(id)
  //   .subscribe((dish)=> this.dish = dish);
  // }
  //now making use of observables
  ngOnInit(): void {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe((dish)=> {this.dish = dish; this.setPrevNext(dish.id);});
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
