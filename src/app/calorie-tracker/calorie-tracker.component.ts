import { Component, OnInit } from '@angular/core';
import { AddCaloriesService } from '../addCalories.service';

@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.css']
})
export class CalorieTrackerComponent implements OnInit {
  caloriesReceived = 0;


  constructor(private addCaloriesService: AddCaloriesService) {
    // this.addCaloriesService.caloriesAdded.subscribe((calories: number) => this.addCalories(calories));
  }

  ngOnInit() {
    this.addCaloriesService.caloriesAdded.subscribe((calories: number) => this.addCalories(calories));
  }


  addCalories(calories: number) {
    this.caloriesReceived += calories;
  }



}
