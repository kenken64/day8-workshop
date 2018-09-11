import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarapiService } from '../../services/starwarapi.service'
import { SwInterface } from '../../models/swinterface.intf';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  nameUrl = "";
  showSpinner = false;
  details : SwInterface;
  recordId =  "";
  cardName = "";
  resultMap : any;
  resultKeys: any;

  constructor(private route: ActivatedRoute,
    private swSvc: StarwarapiService) { }

  ngOnInit() {
    let url = this.route.snapshot.paramMap.get('url');
    this.nameUrl =  url;
    this.swSvc
      .getDetails(url)
      .subscribe((data)=>{
        console.log(data);
        this.details = data;
        console.log(data);
        this.resultMap = this.objToMap(data);
        this.getResultKeys();
        this.showSpinner = true;
      });
  }
  
  getResultKeys() {
    this.resultKeys = this.resultMap.keys();
  }

  objToMap = ( obj => {
    const mp = new Map;
    Object.keys ( obj ). forEach (k => { 
      if(k ==='url'){
        let finalUrl = "";
        let urlArr = obj[k].split('/');
        console.log(urlArr);
        console.log(urlArr[urlArr.length-2]);
        if(obj[k].includes('people')){
          finalUrl = `https://starwars-visualguide.com/assets/img/characters/${urlArr[urlArr.length-2]}.jpg`
        }else if(obj[k].includes('planets')){
          finalUrl = `https://starwars-visualguide.com/assets/img/planets/${urlArr[urlArr.length-2]}.jpg`
        }
        this.recordId = finalUrl;
        console.log(this.recordId);
      }

      if(k ==='name'){
        this.cardName = obj[k];
      }
      mp.set(k, obj[k]) 
    });
    return mp;
  });

}
