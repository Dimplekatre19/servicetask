import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PassdashboardComponent } from './passdashboard/passdashboard.component';
import { PasscountComponent } from './passcount/passcount.component';
import { PasscardComponent } from './passcard/passcard.component';




@NgModule({
  declarations: [
    PassdashboardComponent,
    PasscountComponent,
    PasscardComponent
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
