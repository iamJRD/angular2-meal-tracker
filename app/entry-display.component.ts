import {Component} from 'angular2/core';
import {Entry} from './entry.model';

@Component ({
  selector: 'entry-display',
  inputs: ['entry'],
  template: `
    <h2>{{entry.name}}</h2>
  `
})

export class EntryDisplayComponent {
  public entry: Entry;
}
