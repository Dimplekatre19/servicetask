import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, Productstatus } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-prodcard',
  templateUrl: './prodcard.component.html',
  styleUrls: ['./prodcard.component.scss']
})
export class ProdcardComponent implements OnInit {
@Input()prodObj !:Iproduct;
productstatus = Productstatus

  constructor(
    private _productservice : ProductService
  ) { }

  ngOnInit(): void {
  }
 onstatuschange(updatestatus:Productstatus){
      this._productservice.updateproductstatus(updatestatus,this.prodObj.pid)
 }
}
