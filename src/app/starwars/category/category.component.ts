import { Component, OnInit } from '@angular/core';

import { StarwarapiService } from '../../services/starwarapi.service'
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = [];
  showSpinner = false;
  constructor(private swSvc: StarwarapiService) { }

  ngOnInit() {
    console.log("init");
    
    this.swSvc
      .getCategories()
      .subscribe((data)=>{
        console.log(data);
        let keysArr = Object.keys(data);
        keysArr.forEach((keyValue)=>{
          let category = new Category(keyValue, data[keyValue]);
          this.categories.push(category);
          this.showSpinner = true;
        })
        console.log(keysArr);
        //this.categories = keysArr;
      });
    
    
  }

}
