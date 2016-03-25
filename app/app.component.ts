import {Component} from 'angular2/core';
import {Entry} from './entry.model';

@Component({
  selector: 'my-app',
  template:`
    <div class="container">
      <div class="row">
        <h1>Meal Tracker</h1>
      </div>
    </div>
    `
})

export class AppComponent {
  public entries: Entry[];

  constructor() {
    this.entries = [
      new Entry(["Milkshake", "Chocolate Milkshake", 300, "Snack"])
    ]
  }
}
