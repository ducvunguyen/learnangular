import { Component, OnInit, Input } from '@angular/core';
import { SpacexComponent } from '../spacex/spacex.component';
import { any } from 'codelyzer/util/function';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent extends SpacexComponent implements OnInit {
  // form_add: any[];

  Input = {
    fullname: '',
    age: '',
  }
  @Input()input: Input;
  @Input() fullname: string;
  @Input() age: string;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
