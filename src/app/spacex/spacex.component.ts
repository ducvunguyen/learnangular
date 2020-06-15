import { InsertComponent } from '../insert/insert.component';
import { AppComponentSpacex, Universal } from './app.component.spacex';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})

export class SpacexComponent extends AppComponentSpacex implements OnInit {
  NASA;
  toggle = false;
  validate;
  INPUT = {
    fullname: '',
    age: ''
  };
  edit: {
    id: any;
    data: any;
  };
  TOGGLE_SHOW = false;

  constructor() {
     super();
     const dataSpace = JSON.parse(localStorage.getItem('data'));
     dataSpace ? this.NASA = dataSpace : this.NASA = [];
   }
   Message(message){
      return message;
   }
   ToggleTurnoff(){
      this.toggle = false;
      this.edit = undefined;
  }
  ResetInput() {
    this.INPUT = {
      fullname: '',
      age: ''
    };
  }
  insert(){
    if (!this.INPUT.fullname){
      return this.validate = 'Ban chua nhap ten';
    }else{
      this.validate = undefined;
    }
    if (!this.INPUT.age){
      this.validate = 'Ban chua nhap tuoi';
      return this.validate;
    }else {
      this.validate = undefined;
    }
    const data = {
      id: super.IdGenderal(),
      name: this.INPUT.fullname,
      age: this.INPUT.age,
    };
    this.NASA.push(data);
    localStorage.setItem('data', JSON.stringify(this.NASA));
    this.ToggleTurnoff();
    this.ResetInput();
    console.log(this.toggle);
    return this.NASA;
  }
  Edit(_ID){
    this.edit = {
      id: _ID,
      data: this.NASA[_ID],
    };
    this.toggle = true;
    this.INPUT = {
      fullname: this.edit.data.name,
      age: this.edit.data.age
    };
  }

  Update(id: any){
    const fullname = this.INPUT.fullname;
    const tuoi = this.INPUT.age;
    const _ID = this.NASA[id].id;
    const data = {
      id: _ID,
      name: fullname,
      age: tuoi,
    };
    this.NASA[id] = data;
    localStorage.setItem('data', JSON.stringify(this.NASA));
    this.NASA = JSON.parse(localStorage.getItem(('data')));
    this.ToggleTurnoff();
  }
  Delete(id){
    this.NASA.splice(id, 1);
    localStorage.setItem('data', JSON.stringify(this.NASA));
    this.NASA = JSON.parse(localStorage.getItem('data'));
  }


  ngOnInit() {
  }

  new() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}

// const guid = new Guid();
// console.log(guid)
