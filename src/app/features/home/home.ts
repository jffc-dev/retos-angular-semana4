import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

  private router = inject(Router)

  redireccionar(ruta: string){
    this.router.navigate([ruta])
  }
}
