import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:import-spacing
import  {AppComponentSpacex, Universal} from './app.component.spacex';
import { HEROES } from './mock-space';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})


export class SpacexComponent extends AppComponentSpacex implements OnInit {
  NASA;
  toggle = false;
  Messname;
  Messageage;
  edit: {
    id: any;
    data: any;
  };
  genK(id= 32, name= 'ads'){
    return  super.init(id, name);
  }
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
  insert(){
    const fullname = (document.getElementById('fullname') as HTMLInputElement).value;
    const tuoi = (document.getElementById('age') as HTMLInputElement).value;
    // console.log(demo);
    if (!fullname){
      return this.Messname = 'Ban chua nhap ten';
    }else{
      this.Messageage = undefined;
    }
    if (!tuoi){
      this.Messageage = 'Ban chua nhap tuoi';
      return this.Messageage;
    }else {
      this.Messageage = undefined;
    }
    const data = {
      id: super.IdGenderal(),
      name: fullname,
      age: tuoi,
    };
    this.NASA.push(data);
    localStorage.setItem('data', JSON.stringify(this.NASA));
    this.ToggleTurnoff();
    return this.NASA;
  }
  Edit(_ID){
    this.edit = {
      id: _ID,
      data: this.NASA[_ID],
    };
    const demo = JSON.parse(localStorage.getItem('data'));
    this.toggle = true;
  }

  Update(id: any){
    const fullname = (document.getElementById('fullname_edit') as HTMLInputElement).value;
    const tuoi = (document.getElementById('age_edit') as HTMLInputElement).value;
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
    return this.genK();
  }

  new() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}

