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
isineditmode:boolean=false
@Output() emitpassinfo : EventEmitter<Ipassenger>= new EventEmitter<Ipassenger>()
  constructor(
    private _passService: PassengerService
  ) { }

  ngOnInit(): void {
  }
  onupdatename(updatedname:string){
      this.isineditmode=!this.isineditmode
      let obj={...this.passObj,fullname:updatedname}
      this._passService.updatename(obj)
  }
  onprodremove(id:number){
      this._passService.passremove(id)
  }

}
