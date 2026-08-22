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


// OJO estamos en http://localhost:4200/home

// Al usar rutas absolutas -> http://localhost:4200/reto-02

// Al usar rutas relativas -> http://localhost:4200/home/reto-02
