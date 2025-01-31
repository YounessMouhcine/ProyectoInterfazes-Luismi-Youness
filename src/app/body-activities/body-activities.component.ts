import { Component, OnInit } from '@angular/core';
import { ActivitiesServiceService } from '../Service/activities-service.service';
import { Evento } from '../Service/activities-service.service';
import { MonitorService } from '../Service/monitores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-activities.component.html',
  styleUrl: './body-activities.component.scss'
})
export class BodyActivitiesComponent implements OnInit {
  actividades: any[] = [];
  monitors: any[] = [];
  constructor(private activityService: ActivitiesServiceService, private monitorService : MonitorService ) {
    this.actividades=this.activityService.getActividades(); 
  }
  ngOnInit(): void {
    this.monitors = this.monitorService.getMonitors();
  }

  getfecha() {
    var fechaTexto = document.getElementById("fecha") as HTMLInputElement;
    var fecha = document.getElementById("datepicker") as HTMLInputElement;
  
    // Obtener el valor del datepicker (formato "yyyy-mm-dd")
    var fechaSeleccionada = fecha.value; 
  
    // Separar el valor en componentes (año, mes, día)
    var [año, mes, día] = fechaSeleccionada.split('-'); 
  
    // Formatear la fecha en "día-mes-año"
    var fechaFormateada = `${día}-${mes}-${año}`;
  
    // Asignar el valor formateado al texto
    fechaTexto.textContent = fechaFormateada;
  
    // Mostrar en consola
    console.log(fechaFormateada);
  }
  cambiarFechaAtras() {
    var fechaAhora = document.getElementById("fecha") as HTMLInputElement;
    var fechaStr = fechaAhora.textContent;  // Obtén el valor del input (debería estar en formato 'dd-mm-yyyy')

    // Verificar que la fecha no esté vacía
    if (fechaStr) {
        // Dividir la cadena en partes (día, mes, año)
        var partes = fechaStr.split('-');  // El formato es 'dd-mm-yyyy'
        
        // Asegúrate de que la fecha esté bien formada
        if (partes.length === 3) {
            var dia = parseInt(partes[0], 10);
            var mes = parseInt(partes[1], 10) - 1;  // Mes en JavaScript es base 0 (enero = 0, febrero = 1, ...)
            var año = parseInt(partes[2], 10);

            // Crear la fecha a partir de los componentes
            var fecha = new Date(año, mes, dia);

            // Verificar si la fecha es válida
            if (isNaN(fecha.getTime())) {
                console.log("Fecha inválida");
            } else {
                // Restar un día
                fecha.setDate(fecha.getDate() - 1);  // Resta un día a la fecha

                console.log("Fecha después de restar un día:", fecha);
                
                // Actualizar el valor del input con la nueva fecha (en formato 'dd-mm-yyyy')
                var nuevoDia = fecha.getDate().toString().padStart(2, '0');
                var nuevoMes = (fecha.getMonth() + 1).toString().padStart(2, '0');
                var nuevoAño = fecha.getFullYear();
                
                var nuevaFechaStr = `${nuevoDia}-${nuevoMes}-${nuevoAño}`;  // Formato 'dd-mm-yyyy'
                fechaAhora.textContent = nuevaFechaStr;  // Actualiza el valor del input
                
                // Aquí puedes hacer lo que desees con la nueva fecha
            }
        } else {
            console.log("Formato de fecha incorrecto");
        }
    } else {
        console.log("No se ha proporcionado una fecha.");
    }
  }

  cambiarFechaAdelante() {
    var fechaAhora = document.getElementById("fecha") as HTMLInputElement;
    var fechaStr = fechaAhora.textContent;  // Obtén el valor del input (debería estar en formato 'dd-mm-yyyy')

    // Verificar que la fecha no esté vacía
    if (fechaStr) {
        // Dividir la cadena en partes (día, mes, año)
        var partes = fechaStr.split('-');  // El formato es 'dd-mm-yyyy'
        
        // Asegúrate de que la fecha esté bien formada
        if (partes.length === 3) {
            var dia = parseInt(partes[0], 10);
            var mes = parseInt(partes[1], 10) - 1;  // Mes en JavaScript es base 0 (enero = 0, febrero = 1, ...)
            var año = parseInt(partes[2], 10);

            // Crear la fecha a partir de los componentes
            var fecha = new Date(año, mes, dia);

            // Verificar si la fecha es válida
            if (isNaN(fecha.getTime())) {
                console.log("Fecha inválida");
            } else {
                // Sumar un día
                fecha.setDate(fecha.getDate() + 1);  // Suma un día a la fecha

                console.log("Fecha después de sumar un día:", fecha);
                
                // Actualizar el valor del input con la nueva fecha (en formato 'dd-mm-yyyy')
                var nuevoDia = fecha.getDate().toString().padStart(2, '0');
                var nuevoMes = (fecha.getMonth() + 1).toString().padStart(2, '0');
                var nuevoAño = fecha.getFullYear();
                
                var nuevaFechaStr = `${nuevoDia}-${nuevoMes}-${nuevoAño}`;  // Formato 'dd-mm-yyyy'
                fechaAhora.textContent = nuevaFechaStr;  // Actualiza el valor del input
                
                // Aquí puedes hacer lo que desees con la nueva fecha
            }
        } else {
            console.log("Formato de fecha incorrecto");
        }
    } else {
        console.log("No se ha proporcionado una fecha.");
    }
}


 


cambiar() {
  // Obtener la fecha seleccionada
  const fechaSeleccionada = (document.getElementById("fecha") as HTMLInputElement).textContent;
  //reiniciar lista
  for (let e = 1; e <= 3; e++) {
    let lista = document.getElementById(`monitor${e}hid`) as HTMLInputElement;
    let listaOculta = document.getElementById(`monitor1hid${e}`) as HTMLInputElement;
    lista.setAttribute('hidden', 'true');
    listaOculta.setAttribute('hidden', 'true');
  }
  // Variable para verificar si la fecha existe
  let fechaExistente = false;

  // Iterar sobre los eventos
  for (let i = 0; i < this.actividades.length; i++) {
    if (this.actividades[i].fecha === fechaSeleccionada) {
      fechaExistente = true;

      // Iterar sobre los eventos de la fecha seleccionada
      for (let e = 0; e < this.actividades[i].eventos.length; e++) {
        // Obtener los elementos que se van a manipular
        let lista = document.getElementById(`monitor${e + 1}hid`) as HTMLInputElement;
        let listaOculta = document.getElementById(`monitor1hid${e + 1}`) as HTMLInputElement;
        let nombreMonitorSecundario = document.getElementById(`nombreMonitor${e + 1}`) as HTMLInputElement;
        let nombreMonitor = document.getElementById(`nombreMonitor1${e + 1}`) as HTMLInputElement;


        // Obtener los detalles del evento
        let hora = this.actividades[i].eventos[e].hora;
        let actividad = this.actividades[i].eventos[e].actividad;
        let monitor1 = this.actividades[i].eventos[e].monitor1;
        let monitor2 = this.actividades[i].eventos[e].monitor2;

        // Mostrar el evento según la hora
        this.manejarEvento(lista, listaOculta, nombreMonitor, nombreMonitorSecundario, actividad, monitor1, monitor2);
      }
    }
  }

  // Si la fecha seleccionada no existe en los eventos, ocultar todos los monitores
  if (!fechaExistente) {
    for (let e = 1; e <= 3; e++) {
      let lista = document.getElementById(`monitor${e}hid`) as HTMLInputElement;
      let listaOculta = document.getElementById(`monitor1hid${e}`) as HTMLInputElement;
      lista.setAttribute('hidden', 'true');
      listaOculta.setAttribute('hidden', 'true');
    }
  }
}





// Función para manejar la visibilidad de las listas y asignar monitores
manejarEvento(
  lista: HTMLInputElement,
  listaOculta: HTMLInputElement,
  nombreMonitor: HTMLInputElement,
  nombreMonitorSecundario: HTMLInputElement,
  actividad: string,
  monitor1: string,
  monitor2: string
) {
  // Verificar si la actividad es BodyPump o Spinning
  if (actividad === "BodyPump") {
    listaOculta.removeAttribute('hidden');
    lista.removeAttribute('hidden')  // Mostrar el evento de BodyPump
    nombreMonitor.textContent = monitor1;
    nombreMonitorSecundario.textContent = monitor2 || "";  // Si no hay monitor secundario, lo dejamos vacío
  } else if (actividad === "Spinning") {
    listaOculta.setAttribute('hidden', 'true');
    lista.removeAttribute('hidden');
    nombreMonitor.textContent = monitor1;
    nombreMonitorSecundario.textContent = "";  // Sin monitor secundario
  } else {
    // Si la actividad no es BodyPump ni Spinning, ocultamos ambos elementos
    listaOculta.setAttribute('hidden', 'true');
    lista.setAttribute('hidden', 'true');
  }
}





editar(eventoIndex: number) {
  // Obtener el texto de la fecha seleccionada
  const fechaSeleccionada = (document.getElementById("fecha") as HTMLParagraphElement).textContent;
  var horapor = document.getElementById("horapor") as HTMLInputElement;
  horapor.value = eventoIndex.toString();
  if (fechaSeleccionada) {
    // Buscar el evento basado en la fecha y el índice del evento
    const evento = this.actividades.find(e => e.fecha === fechaSeleccionada)?.eventos[eventoIndex];

    if (evento) {
      // Llenar los campos del formulario con los valores actuales del evento
      const form = document.getElementById("editar") as HTMLInputElement;
      const formMenu = document.getElementById("menu") as HTMLInputElement;
      formMenu.setAttribute('hidden', 'true');
      
      
      // Asignar los valores al formulario
      const selector1 = document.getElementById("selector1") as HTMLSelectElement;
      const selector2 = document.getElementById("selector2") as HTMLInputElement;
      const selector3 = document.getElementById("selector3") as HTMLInputElement;
      const selector3Pro = document.getElementById("selector3Pro") as HTMLInputElement;
        if(eventoIndex == 0){
          const borrado1 = document.getElementById("borrado1");
          borrado1?.classList.remove("ocultar");
        }else if (eventoIndex == 1){
          const borrado2 = document.getElementById("borrado2");
          borrado2?.classList.remove("ocultar");
        }else if(eventoIndex == 2){
          const borrado3 = document.getElementById("borrado3");
          borrado3?.classList.remove("ocultar");
        }
        const mas = document.getElementById("mas");
        const papelera = document.getElementById("papelera");
        const lapiz = document.getElementById("lapiz");
        mas?.setAttribute('hidden','true');
        papelera?.removeAttribute('hidden');
        lapiz?.removeAttribute('hidden');
      selector3.removeAttribute('hidden');
      form.removeAttribute('hidden');
      selector3Pro.removeAttribute('hidden');
      // Aquí puedes poner el valor que desees para cada selector, según el evento
      selector1.value = evento.actividad;  // Asigna la actividad seleccionada
      selector2.textContent = evento.monitor1;  // Asigna el primer monitor
      if (evento.actividad === "BodyPump") {
        // Mostrar el segundo monitor solo si existe
        selector3.removeAttribute('hidden');
        selector2.setAttribute('placeholder', evento.monitor1);
        selector3.setAttribute('placeholder', evento.monitor2 || '');  // Si no hay segundo monitor, se deja vacío
      } else {
        selector2.setAttribute('placeholder', evento.monitor1);
        selector3Pro.setAttribute('hidden', 'true');
      }
        // Asignar segundo monitor si existe, si no, vacio
    }
  }
}
guardarCambios() {
  
  // Obtener el texto de la fecha seleccionada
  const fechaSeleccionada = (document.getElementById("fecha") as HTMLParagraphElement).textContent;

  if (fechaSeleccionada) {
    // Buscar el objeto de evento para la fecha seleccionada
    const eventoPorFecha = this.actividades.find(e => e.fecha === fechaSeleccionada);

    if (eventoPorFecha) {
      // Obtener los valores seleccionados en el formulario
      const selector1 = document.getElementById("selector1") as HTMLSelectElement;
      const selector2 = document.getElementById("selector2") as HTMLSelectElement;
      const selector3 = document.getElementById("selector3") as HTMLSelectElement;

      // Obtener la hora seleccionada para identificar el evento a actualizar
      const hora = document.getElementById("horapor") as HTMLInputElement;
      var horaSeleccionada = "";
      if(hora.value == "0"){
        horaSeleccionada = "10:00";
      }else if(hora.value == "1"){
        horaSeleccionada = "13:30";
      }else if(hora.value == "2"){
        horaSeleccionada = "17:30";
      }
      
      if (horaSeleccionada) {
        // Encontrar el evento correspondiente por la hora
        const eventoIndex = eventoPorFecha.eventos.findIndex((e:Evento) => e.hora === horaSeleccionada);

        if (eventoIndex >= 0) {
          // Actualizar el evento con los nuevos valores
          eventoPorFecha.eventos[eventoIndex].actividad = selector1.value;
          eventoPorFecha.eventos[eventoIndex].monitor1 = selector2.value;
          eventoPorFecha.eventos[eventoIndex].monitor2 = selector3.value || '';

          // Mostrar mensaje de éxito en consola (o en la UI si lo prefieres)
          console.log('Evento actualizado:', eventoPorFecha.eventos[eventoIndex]);
          console.log(eventoPorFecha.eventos[eventoIndex].actividad);
          console.log(eventoPorFecha.eventos[eventoIndex].monitor1);
          console.log(eventoPorFecha.eventos[eventoIndex].monitor2);
          // Ocultar el formulario de edición y mostrar el menú
          const form = document.getElementById("editar") as HTMLInputElement;
          const formMenu = document.getElementById("menu") as HTMLInputElement;
          formMenu.removeAttribute('hidden');
          form.setAttribute('hidden', 'true');  // Ocultar el formulario de edición
          this.cambiar();
          
        } else {
          console.log('No se encontró el evento para la hora seleccionada');
        }
      } else {
        console.log('No se seleccionó una hora válida');
      }
    }
  }
}
cambiarSelect() {
  const selector1 = document.getElementById("selector1") as HTMLSelectElement;
  const selector2 = document.getElementById("selector2") as HTMLSelectElement;
  const selector3 = document.getElementById("selector3Pro") as HTMLSelectElement;

  // Verificar qué actividad se seleccionó
  if (selector1.value === "BodyPump") {
    selector3.removeAttribute('hidden');
  } else {
    selector3.setAttribute('hidden', 'true');
  }


  this.monitors = this.monitorService.getMonitors();
}

borrar(eventoIndex: number) {
  // Obtener la fecha seleccionada
  const fechaSeleccionada = (document.getElementById("fecha") as HTMLParagraphElement).textContent;

  if (fechaSeleccionada) {
    // Buscar el objeto de evento para la fecha seleccionada
    const eventoPorFecha = this.actividades.find(e => e.fecha === fechaSeleccionada);

    if (eventoPorFecha) {
      // Encontrar el evento correspondiente por la hora seleccionada
      const eventoIndexEncontrado = eventoPorFecha.eventos.findIndex((e:Evento) => e.hora === this.obtenerHoraPorIndice(eventoIndex));
      if (eventoIndexEncontrado >= 0) {
        // Eliminar el monitor de ese evento (se puede setear a vacío o borrarlo directamente)
        eventoPorFecha.eventos[eventoIndexEncontrado].monitor1 = '';
        eventoPorFecha.eventos[eventoIndexEncontrado].monitor2 = '';

        // Ocultar los íconos de lápiz y papelera
        const papelera = document.getElementById("papelera");
        const lapiz = document.getElementById("lapiz");
        papelera?.setAttribute('hidden', 'true');
        lapiz?.setAttribute('hidden', 'true');

        // Mostrar el ícono de "más" en la fila correspondiente
        const mas = document.getElementById("mas");  // Cambié esto para hacer que sea dinámico
        mas?.removeAttribute('hidden');

        // Ocultar las filas que han sido borradas (por ejemplo, "borrado1", "borrado2", etc.)
        const borrado = document.getElementById("borrado" + (eventoIndex + 1));
        borrado?.classList.add("ocultar");
        mas?.classList.add("mostrar")
        // Actualizar la vista
        this.cambiar();  // Llamamos a cambiar() para que se actualicen los monitores visualmente

        console.log('Monitor eliminado del evento:', eventoPorFecha.eventos[eventoIndexEncontrado]);
      } else {
        console.log('Evento no encontrado para eliminar');
      }
    }
  }
}


obtenerHoraPorIndice(indice: number): string {
  // Esta función puede convertir un índice (0, 1, 2) a una hora (10:00, 13:30, 17:30)
  switch (indice) {
    case 0: return "10:00";
    case 1: return "13:30";
    case 2: return "17:30";
    default: return "";
  }
}


  cancelar(){
    let form = document.getElementById("editar") as HTMLInputElement;
    let formMenu = document.getElementById("menu") as HTMLInputElement;
    form.setAttribute('hidden', 'true');
    formMenu.removeAttribute('hidden');
  }


  
}

