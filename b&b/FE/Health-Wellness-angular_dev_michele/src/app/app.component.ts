import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleAngular';  
  showComp: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/' || val.url == '/home' || val.url == '/login' || val.url == '/signup') {
          this.showComp = false;
        } else {
          this.showComp = true;
        }
      }
    });
  }
}
