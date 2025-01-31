import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonitorService } from '../Service/monitores.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-monitors',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent,FooterComponent],
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss'], 
})
export class MonitorsComponent {
  monitors: any[] = [];
  currentMonitor: any = {};
  currentSlide: number = 0;
  itemsPerSlide: number = 3;
  constructor(private monitorService: MonitorService, private ngZone: NgZone) {
    this.loadMonitors();
  }

  loadMonitors() {
    this.monitors = this.monitorService.getMonitors();
  }

  buscarMonitor() {
    this.monitors = this.monitorService.getMonitors();
    let moni = (document.getElementById('monitorABuscar') as HTMLInputElement).value;
    if (moni === "") {
      this.loadMonitors();
      return;
    } else {
      this.monitors = this.monitors.filter(monitor =>
        monitor.name.toLowerCase().includes(moni.toLowerCase())
      );
    }
  }

  getVisibleMonitors() {
    const startIndex = this.currentSlide * this.itemsPerSlide;
    return this.monitors.slice(startIndex, startIndex + this.itemsPerSlide);
  }

  nextSlide() {
    if ((this.currentSlide + 1) * this.itemsPerSlide < this.monitors.length) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  openModal() {
    const errores = document.getElementById('errores') as HTMLInputElement;
    const error = document.getElementById('error') as HTMLInputElement;
    errores.textContent = '';
    error.textContent = '';
    this.currentMonitor = { name: '', email: '', phone: '' };
    document.getElementById('monitorModalAgregar')!.style.display = 'block';
  }

  openEditModal(monitor: any) {
    const errores = document.getElementById('errores') as HTMLInputElement;
    const error = document.getElementById('error') as HTMLInputElement;
    errores.textContent = '';
    error.textContent = '';
    this.currentMonitor = monitor;
    document.getElementById('monitorModalEditar')!.style.display = 'block';
  }

  closeModal() {
    document.getElementById('monitorModalAgregar')!.style.display = 'none';
    document.getElementById('monitorModalEditar')!.style.display = 'none';
  }

  deleteMonitor(monitor: any) {
    this.monitorService.deleteMonitor(monitor);
    this.ngZone.run(() => {
      this.loadMonitors();
    });
  }

  editMonitor() {
    this.monitors = this.monitorService.getMonitors();
    const errores = document.getElementById('error') as HTMLInputElement;
    if (this.monitors.find(m => m.email === this.currentMonitor.email && m !== this.currentMonitor)) {
      errores.classList.add('rojo');
      errores.textContent = "Este correo electrónico ya está registrado.";
      return;
    }else{
      this.ngZone.run(() => {
        this.monitorService.updateMonitor(this.currentMonitor);
        this.closeModal();
        this.loadMonitors();
      });
    } 
  }

  saveMonitor() {
    this.monitors = this.monitorService.getMonitors();
    const error = document.getElementById('errores') as HTMLInputElement;
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let phone = (document.getElementById('phone') as HTMLInputElement).value;

    this.currentMonitor.name = name;
    this.currentMonitor.email = email;
    this.currentMonitor.phone = phone;

    this.ngZone.run(() => {
      if (this.monitorService.getMonitors().some(m => m.email === this.currentMonitor.email)) {
        error.classList.add('rojo');
        error.textContent = 'Este correo electrónico ya esta registrado';
        return;
      } else {
        if (this.currentMonitor.name === "" || this.currentMonitor.phone === "" || this.currentMonitor.email === "") {
          error.classList.add('rojo');
          error.textContent = 'No puedes dejar ningún registro en blanco.';
          return;
        } else {
          this.monitorService.addMonitor(this.currentMonitor);
        }
      }
      this.closeModal();
      this.loadMonitors();
    });
  }
}
