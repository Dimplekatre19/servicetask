import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.scss']
})
export class ProductdashboardComponent implements OnInit {
  prodArr !:Array<Iproduct>
  constructor(
    private _prodservice:ProductService
  ) { }

  ngOnInit(): void {
  this.prodArr= this._prodservice.fetchallproduct()
  
  }

}
