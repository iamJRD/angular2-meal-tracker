import {Component} from 'angular2/core';
import {Entry} from './entry.model';

@Component ({
  selector: 'edit-entry',
  inputs: ['entry'],
  template: `
    <h4>Edit Entry:</h4>
      <label>Edit Entry Name: </label>
      <input [(ngModel)]="entry.name" />
        <br>
      <label>Edit Entry Description: </label>
      <input [(ngModel)]="entry.description" />
        <br>
      <label>Edit Entry Calories: </label>
      <input [(ngModel)]="entry.calories" />
        <br>
      <label>Edit Entry Category: </label>
      <select [(ngModel)]="entry.category">
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
  `
})

export class EditEntryComponent {
  public entry: Entry;
}
