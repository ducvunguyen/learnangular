import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SpacexComponent } from '../spacex/spacex.component';
import { Insertform } from './insert_interface';
import { any } from 'codelyzer/util/function';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  // form_add: any[];
  Input = {
    fullname: '',
    age: '',
  };
  @Input() inputInsert;
  @Input() validate;
  // @Input() insert;
  // @Output() insert();
  @Output() insert = new EventEmitter<string>();
  @Output() toggleTurnoff = new EventEmitter();

  constructor() {
  }
  Insert() {
    this.insert.emit();
  }
  ToggleTurnoff(){
    this.toggleTurnoff.emit();
  }
  ngOnInit(): void {
  }

}
