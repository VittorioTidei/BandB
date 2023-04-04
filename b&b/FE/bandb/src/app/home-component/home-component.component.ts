import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  providers: []
})
export class HomeComponentComponent {


  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
