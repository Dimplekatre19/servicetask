import { Injectable } from '@angular/core';
import { Iproduct, Productstatus } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productarr:Array<Iproduct>=[
    {
      pname:"samsung s24",
      pdetail:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, deserunt itaque repellat dicta aut dolorem quae saepe placeat est nihil nesciunt temporibus ab porro laudantium nobis, dolorum dignissimos atque. Doloremque?",
      pid:"123",
      pstatus:Productstatus.Inprogress
    },
    {
      pname:"samsung s25",
      pdetail:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, deserunt itaque repellat dicta aut dolorem quae saepe placeat est nihil nesciunt temporibus ab porro laudantium nobis, dolorum dignissimos atque. Doloremque?",
      pid:"124",
      pstatus:Productstatus.Dispatched
    },
    {
      pname:"iphone",
      pdetail:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, deserunt itaque repellat dicta aut dolorem quae saepe placeat est nihil nesciunt temporibus ab porro laudantium nobis, dolorum dignissimos atque. Doloremque?",
      pid:"125",
      pstatus:Productstatus.Delivered
    },
  ]
  constructor() { }

  fetchallproduct(){
    return this.productarr
  }

  addnewprod(prodObj:Iproduct){
      this.productarr.push(prodObj)
  }

  productstatuschange(pstatus:Productstatus,id:string){
   let getIndex=  this.productarr.findIndex(prod=>prod.pid===id)
   this.productarr[getIndex].pstatus=pstatus
  }
}
