import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  yoshiUrl = assetUrl("yoshi.png");
  reports: Array<Object> = [
    {
      country: "Nepal",
      countryCode: "+977"
    },
    {
      country: "Japan",
      countryCode: "+77"
    },
    {
      country: "Jambia",
      countryCode: "+249"
    },
    {
      country: "Hongkong",
      countryCode: "+42"
    }
  ]
}
