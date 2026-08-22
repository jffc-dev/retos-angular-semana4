import { computed, Service, signal } from '@angular/core';

@Service()
export class ThemeService {
  // TODO: crea un signal<boolean> privado llamado modoOscuroSignal (inicia
  // en false) y expón modoOscuro = this.modoOscuroSignal.asReadonly().
  // Agrega un computed() llamado claseTema que devuelva 'dark' cuando
  // modoOscuroSignal() sea true, o 'light' en caso contrario. Implementa
  // toggleTema() que invierta el valor con .update().

  private modeOscuroSignal = signal<boolean>(false)

  modoOscuro = this.modeOscuroSignal.asReadonly()

  tema = computed<string>(()=>{
    if(this.modeOscuroSignal() === true){
      return 'dark'
    }else{
      return 'light'
    }
  })

  toggleTema(){
    this.modeOscuroSignal.update((valorActual)=>!valorActual)
  }
}
