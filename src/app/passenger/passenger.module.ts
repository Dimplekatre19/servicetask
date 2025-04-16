import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PassdashboardComponent } from './passdashboard/passdashboard.component';
import { PasscardComponent } from './passcard/passcard.component';
import { PasscountComponent } from './passcount/passcount.component';



@NgModule({
  declarations: [
    PassdashboardComponent,
    PasscardComponent,
    PasscountComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PassdashboardComponent
  ]
})
export class PassengerModule { }
