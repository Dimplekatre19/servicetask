import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.scss']
})
export class ProductdashboardComponent implements OnInit {
  productArr!:Array<Iproduct>
  constructor(
    private _prodservice : ProductService
  ) { }

  ngOnInit(): void {
    this.productArr=this._prodservice.fetchallprod()
  }


}
