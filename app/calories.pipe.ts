import {Pipe, PipeTransform} from 'angular2/core';
import {Entry} from './entry.model';

@Pipe ({
  name: "intake",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Entry[], args) {
    var desiredCalories = args[0];
    if(desiredCalories === "low") {
      return input.filter((entry) => {
        return entry.calories <= 300;
      })
    } else if(desiredCalories === "high") {
      return input.filter((entry) => {
        return entry.calories > 300;
      })
    } else {
      return input;
    }
  }
}
