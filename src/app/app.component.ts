import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  ngOnInit(): void {
    // Aquí es donde ejecutas el script al cargar la página
    this.cargaPagina();
  }
  title = 'Proyecto-4V-GYM';
  cargaPagina() {
    // Crear un objeto Date con la fecha actual
    var fechaActual = new Date();
    
    // Obtener el año, mes y día
    var año = fechaActual.getFullYear();
    var mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');  // Mes empieza desde 0, por eso sumamos 1
    var día = fechaActual.getDate().toString().padStart(2, '0');         // PadStart asegura que tenga 2 dígitos
    
    // Crear la fecha en formato "día-mes-año"
    var fechatexto = `${día}-${mes}-${año}`;
  
    // Buscar el elemento donde mostrar la fecha
    var fechaElemento = document.getElementById("fecha") as HTMLInputElement;
    
    // Asignar la fecha formateada al contenido del elemento
    fechaElemento.textContent = fechatexto;
  
    console.log(fechatexto);  // Imprimir la fecha en consola
  }
  
}
