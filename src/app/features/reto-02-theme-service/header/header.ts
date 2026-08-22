import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class HeaderComponent {
  // TODO: inyecta ThemeService con inject() en una propiedad "themeService"
  // para leer themeService.claseTema() y llamar themeService.toggleTema()
  // desde el botón del template.
  themeService = inject(ThemeService)
}
