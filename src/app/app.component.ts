import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { TableComponentComponent } from './table-component/table-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormComponentComponent,TableComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-reactive-form';
}
