import { Component } from '@angular/core';

@Component({
  selector: 'app-root',// where the view corresponding to this component should be displayed in the browser, it will be displayed at the app-root
  //this is present in the index.html
  templateUrl: './app.component.html', //templateUrl is a html file -> which contains the template corresponding to this component
  //template defines the view for this component
  styleUrls: ['./app.component.scss']//component specific style
})
export class AppComponent {
  title = 'conFusion';
}
