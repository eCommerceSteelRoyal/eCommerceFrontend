import { Component } from '@angular/core';

declare var $:any;
declare function initPageEcommerce([]):any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eCommerceFrontend';
  constructor() {
    setTimeout(()=>{
      initPageEcommerce($);
    },50);
  }
}
