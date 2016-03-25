import {Pipe, PipeTransform} from 'angular2/core';
import {Entry} from './entry.model';

@Pipe ({
  name: "meal",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Entry[], args) {
    var desiredMeal = args[0];
    if(desiredMeal === "Breakfast") {
      return input.filter((entry) => {
        return entry.category === "Breakfast";
      })
    } else if(desiredMeal === "Lunch") {
      return input.filter((entry) => {
        return entry.category === "Lunch";
      })
    } else if(desiredMeal === "Dinner") {
      return input.filter((entry) => {
        return entry.category === "Dinner";
      })
    } else if(desiredMeal === "Snack") {
      return input.filter((entry) => {
        return entry.category === "Snack";
      })
    } else {
      return input;
    }
  }
}
