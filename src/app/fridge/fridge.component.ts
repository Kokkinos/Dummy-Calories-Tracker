import { Component, OnInit } from '@angular/core';
import { AddCaloriesService } from '../addCalories.service';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  foods = [
    {title: 'bar', calories: 200},
    {title: 'spinach', calories: 100},
    {title: 'lentils', calories: 200}
  ];

  constructor(private addCaloriesService: AddCaloriesService) { }

  ngOnInit() {
  }


  onAddCalories(food: any) {
    console.log(food.calories);
    // this.addCaloriesService.addCalories(food.calories);
    this.addCaloriesService.caloriesAdded.emit(food.calories);
  }

}
