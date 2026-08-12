import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // TODO: crea un signal<boolean> privado llamado modoOscuroSignal (inicia
  // en false) y expón modoOscuro = this.modoOscuroSignal.asReadonly().
  // Agrega un computed() llamado claseTema que devuelva 'dark' cuando
  // modoOscuroSignal() sea true, o 'light' en caso contrario. Implementa
  // toggleTema() que invierta el valor con .update().
}
