import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class FooterComponent {
  // TODO: inyecta ThemeService con inject() en una propiedad "themeService"
  // para leer themeService.claseTema() y aplicar los estilos del template
  // según el tema activo.
}
