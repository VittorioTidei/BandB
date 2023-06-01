import { Component } from '@angular/core';

@Component({
  selector: 'app-register-user-complete',
  templateUrl: './register-user-complete.component.html',
  styleUrls: ['./register-user-complete.component.css']
})
export class RegisterUserCompleteComponent {

  //Reindirizzo l'utente all'index una volta completato il pagamento
  redirect() { window.setTimeout(function () { window.location.href = "/index.html"; }, 5000); }

}
