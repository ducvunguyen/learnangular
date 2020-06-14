import { InsertComponent } from '../insert/insert.component';

// tslint:disable-next-line:import-spacing
import { AppComponentSpacex, Universal } from './app.component.spacex';
// import { NgModule, Component } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';


import { HEROES } from './mock-space';
import {any} from 'codelyzer/util/function';


@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})

// @NgModule({
//   declarations: [
//     InsertComponent,
//   ],
// })




export class SpacexComponent extends AppComponentSpacex implements OnInit {
  NASA;
  toggle = false;
  Messname;
  Messageage;

  INPUT = {
    fullname: '',
    age: ''
  };
  edit: {
    id: any;
    data: any;
  };

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
    }
  }
  insert(){
    if (!this.INPUT.fullname){
      return this.Messname = 'Ban chua nhap ten';
    }else{
      this.Messageage = undefined;
    }
    if (!this.INPUT.age){
      this.Messageage = 'Ban chua nhap tuoi';
      return this.Messageage;
    }else {
      this.Messageage = undefined;
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
    return this.NASA;
  }
  Edit(_ID){
    this.edit = {
      id: _ID,
      data: this.NASA[_ID],
    };
    const demo = JSON.parse(localStorage.getItem('data'));
    this.toggle = true;
    this.INPUT = {
      fullname: this.edit.data.name,
      age: this.edit.data.age
    }
  }

  Update(id: any){
    const fullname = this.INPUT.fullname;
    const tuoi = this.INPUT.fullname;
    const data = {
      id: super.IdGenderal(),
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
  }
}

