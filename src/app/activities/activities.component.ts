import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BodyActivitiesComponent } from '../body-activities/body-activities.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-activities',
  standalone:true,
  imports: [HeaderComponent,BodyActivitiesComponent,FooterComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

}
