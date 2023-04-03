import { Component } from '@angular/core';
import { calendarioDTO } from 'src/DTO/calendarioDTO';
import { CalendarioService } from 'src/Service/calendarioservice';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  calendari : calendarioDTO[];
  id:number;
  calendario: calendarioDTO;


  constructor(public  calendarioService : CalendarioService){
    // this.getAll(calendarioservice);
  }
  onSubmit(f: NgForm){
    this.calendario = new calendarioDTO(null,f.value.mese,f.value.anno,null);

    this.calendarioService.insert(this.calendario);
  }
  read(id:number, calendarioservice){
    calendarioservice.read(id).subscribe((res)=>{
      this.calendario = res;
    })
  }
}
