import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passcard',
  templateUrl: './passcard.component.html',
  styleUrls: ['./passcard.component.scss']
})
export class PasscardComponent implements OnInit {
@Input()passObj!:Ipassenger
@Output()emitobj :EventEmitter<Ipassenger>= new EventEmitter<Ipassenger>()
isineditmode:boolean=false
  constructor(
    private _passService:PassengerService
  ) { }

  ngOnInit(): void {
  }
  onupdatename(updatedname:string ){
     this.isineditmode=!this.isineditmode
     let obj={...this.passObj,fullname:updatedname}
     this._passService.updatepassenger(obj)
  }
  onprodremove(id:number){
    this._passService.onpassremove(id)
    this.emitobj.emit(this.passObj)
  }
}
