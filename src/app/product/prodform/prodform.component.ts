import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, Productstatus } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-prodform',
  templateUrl: './prodform.component.html',
  styleUrls: ['./prodform.component.scss']
})
export class ProdformComponent implements OnInit {
  @ViewChild('productform')productform!:NgForm
  constructor(
    private _prodservice : ProductService,
    private _uuidservice : UuidService
  ) { }

  ngOnInit(): void {
  }

  onprodadd(){
     if(this.productform.valid){
        let prodobj:Iproduct={
           ... this.productform.value,
           pid:this._uuidservice.generateUuid(),
           pstatus:Productstatus.Inprogress 
            
        }
        this.productform.reset()
        this._prodservice.addproduct(prodobj)
     }
  }

}
