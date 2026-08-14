import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-reto-04-product-service',
  imports: [FormsModule],
  templateUrl: './reto-04-product-service.html',
})
export class Reto04ProductService {
  productService = inject(ProductService);

  // Formulario compartido entre crear y editar: sin id en edición -> crea, con id -> actualiza.
  formulario: Omit<IProduct, 'id'> = { name: '', price: 0, image: '' };
  productoEnEdicionId: string | null = null;
  mensajeError = '';

  // TODO: crearProducto o actualizarProducto según productoEnEdicionId, con
  // subscribe({ next, error }). En next: reload() + cancelarEdicion(). En error: mensajeError.
  guardarProducto(): void {}

  // TODO: precargar "formulario" con los datos de "producto" y guardar su id en productoEnEdicionId.
  editarProducto(producto: IProduct): void {}

  // TODO: confirm() nativo y, si acepta, eliminarProducto(id) con subscribe({ next, error }).
  // En next: reload(). En error: mensajeError.
  eliminarProducto(id: string): void {}

  // TODO: limpiar formulario y productoEnEdicionId.
  cancelarEdicion(): void {}
}
