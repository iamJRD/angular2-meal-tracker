import {Component} from 'angular2/core';
import {Entry} from './entry.model';

@Component ({
  selector: 'entry-details',
  inputs: ['entry'],
  template: `
    <h3><span class="detailsHeaders">Description</span>: {{entry.description}}</h3>
    <h3><span class="detailsHeaders">Calories</span>: <span
      [class.highCalories]="entry.calories >= 500"
      [class.lowCalories]="entry.calories < 200">{{entry.calories}}</span></h3>
    <h3><span class="detailsHeaders">Category</span>: {{entry.category}}</h3>
  `
})

export class EntryDetailsComponent {
  public entry: Entry;
}
