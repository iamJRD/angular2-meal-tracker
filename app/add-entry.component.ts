import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';

@Component ({
  selector: 'add-entry',
  outputs: ['newEntry'],
  template: `
    <h2>Enter food here:</h2>
      <label>New Food Name: </label>
      <input placeholder="ex: Ceaser Salad" type="text" #newEntryName />
        <br>
      <label>New Food Description: </label>
      <input placeholder="ex: Large Salad from Salads R Us" type="text" #newEntryDescription />
        <br>
      <label>New Food Calories: </label>
      <input placeholder="ex: 500" type="number" min="0" #newEntryCalories />
        <br>
      <label>Select New Food Category: </label>
      <select #newEntryCategory>
        <option selected disabled>--- Please choose a category for this entry ---</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
        <br>
      <button (click)="addEntry(newEntryName, newEntryDescription, newEntryCalories, newEntryCategory)" class="btn btn-success">ADD</button>
  `
})

export class AddEntryComponent {
  public newEntry: EventEmitter<any[]>;

  constructor() {
    this.newEntry = new EventEmitter();
  }

  addEntry(inputEntryName: HTMLInputElement, inputEntryDescription: HTMLInputElement, inputEntryCalories: HTMLInputElement, selectEntryCategory: HTMLSelectElement) {
    var entryInfo = [inputEntryName.value, inputEntryDescription.value, inputEntryCalories.value, selectEntryCategory.value];

    if((inputEntryName.value === "") ||
      (inputEntryDescription.value === "") ||
      (inputEntryCalories.value === "") ||
      (selectEntryCategory.value === "")) {
      alert("Please fill out all the fields before attempting to add a new entry!");
    } else {
      this.newEntry.emit(entryInfo);
      inputEntryName.value = "";
      inputEntryDescription.value = "";
      inputEntryCalories.value = "";
      selectEntryCategory.value = "";
    }
  }
}
