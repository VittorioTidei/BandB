import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  providers: []
})
export class HomeComponentComponent {


  gallery = ["../../assets/img/camere/101/101.jpeg", 
  "../../assets/img/camere/101/101-2.jpeg", 
  "../../assets/img/camere/101/101-3.jpeg",
  "../../assets/img/camere/101/101-4.jpeg",
  "../../assets/img/camere/103/103-1.jpeg",
  "../../assets/img/camere/103/103-2.jpeg",
  "../../assets/img/camere/104/104-2.jpeg",
  "../../assets/img/camere/104/104-3.jpeg",
  "../../assets/img/camere/104/104-4.jpeg",
  "../../assets/img/camere/corridoio1.jpeg",
  "../../assets/img/camere/corridoio2.jpeg"
 ]

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
