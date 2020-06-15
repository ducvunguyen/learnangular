// tslint:disable-next-line:prefer-const
let Universal = [];
let _ID = 0;

class AppComponentSpacex {
  constructor() {
    const id = JSON.parse(localStorage.getItem('data_id'));
    // tslint:disable-next-line:radix
    id ? _ID = parseInt(id) : _ID = 0;
  }
  init(id: number, name: string){
    return `${id} ${name}`;
  }
  create_id(){
    const id = JSON.parse(localStorage.getItem('data_id'));
    if (id == null){
      _ID = 1;
      localStorage.setItem('data_id', String(_ID));
    }else{
      // tslint:disable-next-line:
      // tslint:disable-next-line:radix
      _ID = parseInt(id) + 1;
      localStorage.setItem('data_id', String(_ID));
      // tslint:disable-next-line:radix
    }
    return _ID;
  }
  IdGenderal(){
    return 'data' + this.create_id();
  }
}


export {AppComponentSpacex, Universal};
