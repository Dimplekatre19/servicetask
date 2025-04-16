import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passdashboard',
  templateUrl: './passdashboard.component.html',
  styleUrls: ['./passdashboard.component.scss']
})
export class PassdashboardComponent implements OnInit {
 passArr!:Array<Ipassenger>
 checkIncount! : number;
  constructor(
    private _passService : PassengerService
  ) { }

  ngOnInit(): void {
    this.passArr=this._passService.fecthallpass()
  }
 
  getcheckincount(){
  this.checkIncount= this.passArr.filter(pass=>{
         return pass.checkedIn
      }).length
  }
 
  onremoveupdate(eve:any){
      this.getcheckincount()
  }

}
