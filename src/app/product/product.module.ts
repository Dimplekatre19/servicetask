import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductformComponent } from './productform/productform.component';
import { ProductdashboardComponent } from './productdashboard/productdashboard.component';



@NgModule({
  declarations: [
    ProductcardComponent,
            ProductformComponent,
            ProductdashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[ProductdashboardComponent]
})
export class ProductModule { }
