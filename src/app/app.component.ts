import { Component } from '@angular/core';
import { Icatg, Iproduct } from './shared/components/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioProductTask';
  productArray:Array<Iproduct> = [
    {
      pName :"IPhone",
      pDesc : "Specification is good..",
      pCatg : "Product"
    }
  ]

   addProductDetails(pName:HTMLInputElement, pDesc:HTMLInputElement, catg : Icatg){
    console.log(pName, pDesc);
    
    let obj:Iproduct = {
      pName : pName.value,
      pDesc : pDesc.value,
      pCatg : catg
    }
    this.productArray.push(obj)
    pName.value ='';
    pDesc.value =''
  }

  addProduct(pName:HTMLInputElement, pDesc:HTMLInputElement){
    console.log(pName, pDesc);
    
    let obj:Iproduct = {
      pName : pName.value,
      pDesc : pDesc.value,
      pCatg : "Product"
    }
    this.productArray.push(obj)
    pName.value ='';
    pDesc.value =''
  }

  addCatlogs(pName:HTMLInputElement, pDesc:HTMLInputElement){
    console.log(pName, pDesc);
    
    let obj:Iproduct = {
      pName : pName.value,
      pDesc : pDesc.value,
      pCatg : "Catlog"
    }
    this.productArray.push(obj)
    pName.value ='';
    pDesc.value =''
  }
}
































