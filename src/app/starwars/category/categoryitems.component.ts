import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarapiService } from '../../services/starwarapi.service'

@Component({
  selector: 'app-character',
  templateUrl: './categoryitems.component.html',
  styleUrls: ['./categoryitems.component.css']
})
export class CategoryItemsComponent implements OnInit {
  categoryItems = [];
  categoryName = "";
  showSpinner = false;
  
  constructor(private route: ActivatedRoute,
    private swSvc: StarwarapiService) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.categoryName =  name;
    this.swSvc
      .getCategoryItems(name)
      .subscribe((data)=>{
        console.log(data);
        this.categoryItems = data.results;
        this.showSpinner = true;
      });
  }

}
