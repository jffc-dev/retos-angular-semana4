import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-reto-04-product-service',
  imports: [FormsModule],
  templateUrl: './reto-04-product-service.html',
})
export class Reto04Productos {
  readonly productService = inject(ProductService);

  // Formulario compartido entre crear y editar: sin id en edición -> crea, con id -> actualiza.
  formulario: Omit<IProduct, 'id'> = { name: '', price: 0, image: '' };
  productoEnEdicionId: string | null = null;
  readonly mensajeError = signal('');
  readonly busqueda = signal('');
  readonly mutando = signal(false);
  readonly cargando = computed(
    () => this.productService.productsResource.isLoading() || this.mutando(),
  );

  readonly productosFiltrados = computed(() => {
    const termino = this.busqueda().toLowerCase();
    return this.productService.productsResource
      .value()
      .filter((producto) => producto.name.toLowerCase().includes(termino));
  });

  // TODO: crearProducto o actualizarProducto según productoEnEdicionId, con
  // subscribe({ next, error }). En next: reload() + cancelarEdicion(). En error: mensajeError.
  guardarProducto(): void {

    this.mutando.set(true);
    this.mensajeError.set('');

    const observable$ = this.productoEnEdicionId === null
      ? this.productService.crearProducto(this.formulario)
      : this.productService.actualizarProducto(this.productoEnEdicionId, this.formulario)

    observable$.subscribe({
      next: () => {
        this.productService.productsResource.reload();
        this.cancelarEdicion();
      },
      error: () => {
        this.mensajeError.set('Ocurrió un error al guardar el producto');
        this.mutando.set(false);
      },
      complete: () => {
        this.mutando.set(false);
      }
    })

  }

  // TODO: precargar "formulario" con los datos de "producto" y guardar su id en productoEnEdicionId.
  editarProducto(producto: IProduct): void {
    this.productoEnEdicionId = producto.id
    this.formulario = { name: producto.name, price: producto.price, image: producto.image }
  }

  // TODO: confirm() nativo y, si acepta, eliminarProducto(id) con subscribe({ next, error }).
  // En next: reload(). En error: mensajeError.
  eliminarProducto(id: string): void {
    if (!confirm('¿Eliminar este producto?')) return;

    this.mutando.set(true);
    this.mensajeError.set('');
    this.productService.eliminarProducto(id).subscribe({
      next: () => {
        this.productService.productsResource.reload();
      },
      error: () => {
        this.mensajeError.set('Ocurrió un error al eliminar el producto');
        this.mutando.set(false);
      },
      complete: () => {
        this.mutando.set(false);
      }
    })
  }

  // TODO: limpiar formulario y productoEnEdicionId.
  cancelarEdicion(): void {
    this.productoEnEdicionId = null
    this.formulario = { name: '', price: 0, image: '' }
  }
}
