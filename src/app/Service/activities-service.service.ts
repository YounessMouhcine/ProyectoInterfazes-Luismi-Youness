import { Injectable } from '@angular/core';

export interface Evento {
  hora: string;
  actividad: string;
  monitor1: string;
  monitor2: string;
}

export interface EventoPorFecha {
  fecha: string;
  eventos: Evento[];
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesServiceService {
  
  
  eventosPorFecha: EventoPorFecha[] = [
    { 
      fecha: "06-01-2025",
      eventos: [
        { hora: "10:00", actividad:"BodyPump", monitor1: "Jose", monitor2: "Sergio"},
        { hora: "13:30",actividad:"Spinning", monitor1: "Carlos", monitor2: "" }
      ]
    },
    { 
      fecha: "07-01-2025",
      eventos: [
        { hora: "10:00",actividad:"Spinning", monitor1: "Pedro", monitor2: "" },
        { hora: "13:30",actividad:"BodyPump", monitor1: "Mario", monitor2: "Jose" },
        { hora: "17:30",actividad:"BodyPump", monitor1: "Luis", monitor2: "Jose" }
      ]
    },
    { 
      fecha: "08-01-2025",
      eventos: [
        { hora: "10:00",actividad:"Spinning", monitor1: "Santiago", monitor2: "" }
      ]
    }
  ];

  constructor() { }

  public getActividades(){
    return this.eventosPorFecha;
  }

  public DeleteActividad(deletedActivity: any){
    const index = this.eventosPorFecha.indexOf(deletedActivity);
    if (index > -1) {
      this.eventosPorFecha.splice(index, 1);
    }
  }
}
