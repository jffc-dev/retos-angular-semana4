import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';
import { FooterComponent } from './footer/footer';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-reto-02-theme-service',
  imports: [HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './reto-02-theme-service.html',
})
export class Reto02ThemeService {
  // TODO: inyecta ThemeService con inject() en una propiedad "themeService"
  // para usar themeService.claseTema() en el contenedor raíz del template.

  themeService = inject(ThemeService)
}
