import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonitorService {
  private monitors = [
    { name: 'Monitor 1', email: 'monitor1@example.com', phone: '123456789' },
    { name: 'Monitor 2', email: 'monitor2@example.com', phone: '987654321' },
  ];

  getMonitors() {
    return this.monitors;
  }
  
  addMonitor(monitor: any) {
    this.monitors.push(monitor);
  }

  updateMonitor(updatedMonitor: any) {
    const index = this.monitors.findIndex(m => m.email === updatedMonitor.email);

    if (index > -1) {
      // Si existe el monitor, actualizamos los datos
      this.monitors[index] = updatedMonitor;
    }
  }
  

  deleteMonitor(monitor: any) {
    const index = this.monitors.indexOf(monitor);
    if (index > -1) {
      this.monitors.splice(index, 1);
    }
  }
}
