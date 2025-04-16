import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengerArr: Array<Ipassenger>=[
  
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [
          { name: 'Ted', age: 12 },
          { name: 'Chloe', age: 7 },
        ],
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null,
      },
      {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }],
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null,
      },
    
  ]
  constructor() { }

  fecthallpass():Array<Ipassenger>{
      return this.passengerArr
  }

  updatename(passobj:Ipassenger){
    let getindex=this.passengerArr.findIndex(prod=>prod.id=== passobj.id)
    this.passengerArr[getindex]=passobj
  }

  passremove(id:number){
     let getindex=this.passengerArr.findIndex(prod=>prod.id===id)
     this.passengerArr.splice(getindex,1)
  }
}
