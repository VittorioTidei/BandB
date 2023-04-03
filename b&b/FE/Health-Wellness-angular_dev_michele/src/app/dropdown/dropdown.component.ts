import { Component } from '@angular/core';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDTO } from 'src/dto/userdto';
import { Usertype } from 'src/dto/usertype';

@Component({
	selector: 'ngbd-dropdown-config',
	templateUrl: './dropdown.component.html',
	providers: [NgbDropdownConfig], // add NgbDropdownConfig to the component providers
})
export class DropdownComponent {
  user : UserDTO;
  isAdmin : Boolean;
  constructor() {
    
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    		// customize default values of dropdowns used by this component tree
		//config.placement = 'top-start';
		//config.autoClose = true;
   }

  ngOnInit() {
  }

}
