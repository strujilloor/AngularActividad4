import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad4';
  vehiculos:any = [
    {active: true, marca: 'Ferrari'},
    {active: true, marca: 'Lamborghini'},
    {active: false, marca: 'Suzuki'},
    {active: true, marca: 'Volvo'},
  ]
}
