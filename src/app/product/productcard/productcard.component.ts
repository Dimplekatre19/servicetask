import { Component, Input, OnInit,} from '@angular/core';

import { Iproduct, Productstatus } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
@Input()prodObj!:Iproduct;
productstatus=Productstatus

  constructor(
    private _prodService:ProductService
  ) { }

  ngOnInit(): void {
  }
  onstatuschange(updatestatus:Productstatus){
     this.prodObj.pstatus=updatestatus
     this._prodService.productstatuschange(updatestatus,this.prodObj.pid)
  }

}
