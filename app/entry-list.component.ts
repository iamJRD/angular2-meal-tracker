import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';


@Component ({
  selector: 'entry-list',
  inputs: ['entryList'],
  outputs: ['onEntrySelect'],
  template: `
    <div class="col-md-6">
      
    </div>
  `
})
