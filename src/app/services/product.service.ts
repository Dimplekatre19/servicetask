import { Injectable } from '@angular/core';
import { Iproduct, Productstatus } from '../models/product';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productarr:Array<Iproduct>=[
    {
      pname:"samsung s25",
      pdetail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quae perspiciatis repudiandae laudantium aperiam sint deleniti at culpa nihil cupiditate ut magni voluptate, dignissimos doloribus, quas nemo esse molestias.",
      pid:"123",
      pstatus:Productstatus.Inprogress
    },
    {
      pname:"samsung galaxy",
      pdetail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quae perspiciatis repudiandae laudantium aperiam sint deleniti at culpa nihil cupiditate ut magni voluptate, dignissimos doloribus, quas nemo esse molestias.",
      pid:"124",
      pstatus:Productstatus.Dispatched
    },
    {
      pname:"iphone 16",
      pdetail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quae perspiciatis repudiandae laudantium aperiam sint deleniti at culpa nihil cupiditate ut magni voluptate, dignissimos doloribus, quas nemo esse molestias.",
      pid:"125",
      pstatus:Productstatus.Inprogress
    }
  ]
  constructor(
     private _snackbar : SnackbarService
  ) { }

  fetchallprod():Array<Iproduct>{
      return this.productarr
  }

  addproduct(prodobj:Iproduct){
      this.productarr.push(prodobj)
      this._snackbar.opensnackbar(`NEW PRODUCT IS ${prodobj.pname} ADDED  SUCCESSFULLYY`)
  }

  updateproductstatus(upprodstat:Productstatus,id:string){
    let getindex=  this.productarr.findIndex(prod=>prod.pid===id)  
    this.productarr[getindex].pstatus=upprodstat
    this._snackbar.opensnackbar(`PRODUCT STATUS IS UPDATED SUCCESSFULLYY AND THE NEW STATUS IS ${upprodstat}`)
  }
}
