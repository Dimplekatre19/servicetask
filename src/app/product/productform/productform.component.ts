import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, Productstatus } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  @ViewChild('productForm')productForm!:NgForm
  constructor(
    private _uuidService:UuidService,
    private _prodService:ProductService
  ) { }

  ngOnInit(): void {
  }
  onProdadd(){
      if(this.productForm.valid){
        let prodObj:Iproduct={
           ...this.productForm.value,
           pid:this._uuidService.generateUuid(),
           pstatus:Productstatus.Delivered
        };
        this._prodService.addnewprod(prodObj)
        this.productForm.reset()
      }
  }
}
