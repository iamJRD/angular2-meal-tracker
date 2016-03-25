import {Component} from 'angular2/core';
import {Entry} from './entry.model';

@Component ({
  selector: 'entry-details',
  inputs: ['entry'],
  template: `
    <h3>Description: {{entry.description}}</h3>
    <h3>Calories: {{entry.calories}}</h3>
    <h3>Category: {{entry.category}}</h3>
  `
})

export class EntryDetailsComponent {
  public entry: Entry;
}
