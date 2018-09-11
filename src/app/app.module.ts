import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StarwarsModule } from './starwars/starwars.module';
import { Router, NavigationEnd, Event } from '@angular/router';
import { StarwarapiService } from './services/starwarapi.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StarwarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router:Router, private swsvc:StarwarapiService){
    this.router.events.subscribe((event: Event) => {
      console.log(event);
      if (event instanceof NavigationEnd ) {
        console.log("event.url " + typeof(event.url));
        if (event.url == "/" || event.url == "/Home"){
          console.log("hide !")
          this.swsvc.hide(false);
        }else{
          console.log("unhide !")
          this.swsvc.hide(true);
        }
      }
    });
  }

}
