import { EventEmitter } from '@angular/core';

export class AddCaloriesService {
    caloriesReceived = 0;


    caloriesAdded = new EventEmitter<number>();

    // addCalories(amount: number) {
    //     this.caloriesReceived += amount;
    //     console.log(this.caloriesReceived);
    // }
}
