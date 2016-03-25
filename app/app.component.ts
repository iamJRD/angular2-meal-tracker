import {Component} from 'angular2/core';
import {Entry} from './entry.model';
import {EntryListComponent} from './entry-list.component';

@Component({
  selector: 'my-app',
  directives: [EntryListComponent],
  template:`
    <div class="container">
      <div class="row">
        <h1>Meal Tracker</h1>
        <entry-list [entryList]="entries"></entry-list>
      </div>
    </div>
    `
})

export class AppComponent {
  public entries: Entry[];

  constructor() {
    this.entries = [
      new Entry(["Milkshake", "Brings all the girls to the yard", 299, "Snack"]),
      new Entry(["Sonoran Bowl", "Bowl from Veggie Grill", 650, "Lunch"])
    ]
  }
}
