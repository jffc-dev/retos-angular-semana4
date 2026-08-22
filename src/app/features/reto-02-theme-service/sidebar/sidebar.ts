import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme-service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  // TODO: inyecta ThemeService con inject() en una propiedad "themeService"
  // para leer themeService.claseTema() y aplicar los estilos del template
  // según el tema activo.
}
