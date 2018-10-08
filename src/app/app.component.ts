import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad4';
  vehiculos:any = [
    {marca: 'Ferrari'},
    {marca: 'Lamborghini'},
    {marca: 'Suzuki'},
    {marca: 'Volvo'},
  ]
}
