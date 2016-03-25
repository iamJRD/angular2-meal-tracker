import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';
import {EntryDisplayComponent} from './entry-display.component';
import {EntryDetailsComponent} from './entry-details.component';
import {AddEntryComponent} from './add-entry.component';
import {EditEntryComponent} from './edit-entry.component';
import {CaloriesPipe} from './calories.pipe';


@Component ({
  selector: 'entry-list',
  inputs: ['entryList'],
  outputs: ['onEntrySelect'],
  pipes: [CaloriesPipe],
  directives: [EntryDisplayComponent, EntryDetailsComponent, AddEntryComponent, EditEntryComponent],
  template: `
    <div class="col-md-6">
      <label>Filter Entries by Caloric Intake: </label>
      <select (change)="onChangeIntake($event.target.value)">
        <option value="all">View ALL Entries</option>
        <option value="low">View LOW Calorie Entries</option>
        <option value="high">View HIGH Calorie Entries</option>
      </select>
      <div class="entryDisplayArea" *ngFor="#currentEntry of entryList | intake:filterIntake">
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
    <div class="col-md-6">
      <add-entry (newEntry)="addEntry($event)"></add-entry>
    </div>
  `
})

export class EntryListComponent {
  public entryList: Entry[];
  public onEntrySelect: EventEmitter<Entry>;
  public selectedEntry: Entry;
  public filterIntake: string = "all";

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

}
