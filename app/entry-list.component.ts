import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';
import {EntryDisplayComponent} from './entry-display.component';
import {EntryDetailsComponent} from './entry-details.component';
import {AddEntryComponent} from './add-entry.component';
import {EditEntryComponent} from './edit-entry.component';
import {CaloriesPipe} from './calories.pipe';
import {CategoryPipe} from './category.pipe';


@Component ({
  selector: 'entry-list',
  inputs: ['entryList'],
  outputs: ['onEntrySelect'],
  pipes: [CaloriesPipe, CategoryPipe],
  directives: [EntryDisplayComponent, EntryDetailsComponent, AddEntryComponent, EditEntryComponent],
  template: `
    <div class="col-md-6 leftColumn">
      <label>Filter Entries by Caloric Intake: </label>
      <select (change)="onChangeIntake($event.target.value)">
        <option value="all">View ALL Entries</option>
        <option value="low">View LOW Calorie Entries</option>
        <option value="high">View HIGH Calorie Entries</option>
      </select>
        <br>
      <label>Filter Entries by Meal: </label>
      <select (change)="onChangeMeal($event.target.value)">
        <option value="all-meals">View ALL Entries</option>
        <option value="Breakfast">View BREAKFAST Entries</option>
        <option value="Lunch">View LUNCH Entries</option>
        <option value="Dinner">View DINNER Entries</option>
        <option value="Snack">View SNACK Entries</option>
      </select>
      <div class="entryDisplayArea" *ngFor="#currentEntry of entryList | intake:filterIntake | meal:filterCategory">
        <entry-display (click)="entryClicked(currentEntry)"
          [class.selected]="currentEntry === selectedEntry"
          [entry]="currentEntry">
        </entry-display>
        <entry-details *ngIf="currentEntry === selectedEntry"
          [entry]="currentEntry">
        </entry-details>
        <edit-entry *ngIf="currentEntry === selectedEntry"
          [entry]="currentEntry">
        </edit-entry>
      </div>
    </div>
    <div class="col-md-6 rightColumn">
      <add-entry (newEntry)="addEntry($event)"></add-entry>
    </div>
  `
})

export class EntryListComponent {
  public entryList: Entry[];
  public onEntrySelect: EventEmitter<Entry>;
  public selectedEntry: Entry;
  public filterIntake: string = "all";
  public filterCategory: string = "all-meals";

  constructor() {
    this.onEntrySelect = new EventEmitter();
  }

  entryClicked(clickedEntry: Entry) {
    this.selectedEntry = clickedEntry;
    this.onEntrySelect.emit(clickedEntry);
  }

  addEntry(entryInfo: any[]): void {
    this.entryList.push(
      new Entry(entryInfo)
    );
  }

  onChangeIntake(filterCalories) {
    this.filterIntake = filterCalories;
  }

  onChangeMeal(filterMeal) {
    this.filterCategory = filterMeal;
  }

}
