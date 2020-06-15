import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.css']
})
export class RowListComponent implements OnInit {
  @Input() input;
  @Input() edit;
  @Output() update = new EventEmitter();
  @Output() toggle = new EventEmitter();
  Update(id){
    this.update.emit(id);
  }
  ToggleTurnoff(){
    this.toggle.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
