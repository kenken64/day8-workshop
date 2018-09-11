import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { StarwarapiService } from '../../services/starwarapi.service'
import { Hide } from '../../models/hide.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUrl: string;
  hideBackButton: Hide;
  constructor(private swSvc: StarwarapiService, private _location: Location) { }

  ngOnInit() {
    this.swSvc.hidden$.subscribe(hide =>  this.hideBackButton = hide);
  }

  onBack(){
    this._location.back();
  }

}
