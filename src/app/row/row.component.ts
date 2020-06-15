import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() nasa;
  @Input() i;
  @Output() edit = new EventEmitter();
  @Output() Delete = new EventEmitter();

  constructor() { }
  Edit(id){
    this.edit.emit(id);
  }
  delete(id){
    this.Delete.emit(id);
  }
  ngOnInit(): void {
  }

}
