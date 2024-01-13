import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return[
      {name:'Sweety', age:23,email:'sweetyagr@gmail.com' },
      {name:'Nitu', age:24,email:'nitu@gmail.com' },
      {name:'sarvesh', age:24,email:'sarvesh@gmail.com' },
      {name:'Sarveshhh', age:24,email:'sir@gmail.com' }
      


    ]
  }
}
