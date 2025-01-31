import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
Actividad = true;

constructor(private router: Router) {}

getActividad (){
  if(this.Actividad != true){
    this.Actividad = true;
    console.log("actividad");
    this.setColores();
  }
  this.setColores();
  this.router.navigate(['/activities']);
}
getMonitores (){
  if(this.Actividad == true){
    this.Actividad = false;
    this.setColores();
    this.router.navigate(['/monitors']);
  }
}
setColores() {
  let actividad = document.getElementById("actividad");
  let monitores = document.getElementById("monitores");
  if (this.Actividad == true) {
    actividad?.classList.add('bg-warning');
    actividad?.classList.add('text-danger');
    monitores?.classList.remove('bg-warning');
    monitores?.classList.remove('text-danger');
  }else{
    monitores?.classList.add('bg-warning');
    monitores?.classList.add('text-danger');
    actividad?.classList.remove('bg-warning');
    actividad?.classList.remove('text-danger');
  }
}
}
