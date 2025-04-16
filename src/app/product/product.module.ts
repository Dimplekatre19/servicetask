import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ProductdashboardComponent } from './productdashboard/productdashboard.component';
import { ProdcardComponent } from './prodcard/prodcard.component';
import { ProdformComponent } from './prodform/prodform.component';



@NgModule({
  declarations: [
    ProductdashboardComponent,
    ProdcardComponent,
    ProdformComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[ProductdashboardComponent]
})
export class ProductModule { }
