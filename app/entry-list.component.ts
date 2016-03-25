import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';
import {EntryDisplayComponent} from './entry-display.component';
import {EntryDetailsComponent} from './entry-details.component';
import {AddEntryComponent} from './add-entry.component';


@Component ({
  selector: 'entry-list',
  inputs: ['entryList'],
  outputs: ['onEntrySelect'],
  directives: [EntryDisplayComponent, EntryDetailsComponent, AddEntryComponent],
  template: `
    <div class="col-md-6">
      <div *ngFor="#currentEntry of entryList">
        <entry-display (click)="entryClicked(currentEntry)"
          [class.selected]="currentEntry === selectedEntry"
          [entry]="currentEntry">
        </entry-display>
        <entry-details *ngIf="currentEntry === selectedEntry"
          [entry]="currentEntry">
        </entry-details>
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
}
