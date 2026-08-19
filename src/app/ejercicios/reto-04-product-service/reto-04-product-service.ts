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

  ngOnInit(): void {
    this.listarProductos()
  }

  productService = inject(ProductService);

  // Formulario compartido entre crear y editar: sin id en edición -> crea, con id -> actualiza.
  formulario: Omit<IProduct, 'id'> = { name: '', price: 0, image: '' };
  productoEnEdicionId: string | null = null;
  mensajeError = signal('');
  productosSignal = signal<IProduct[]>([])
  busqueda = signal('')

  cargando = signal(false);

  productosFiltrados = computed(()=> {
    return this.productosSignal().filter((producto) => producto.name.toLowerCase().includes(this.busqueda().toLowerCase()))
  })


  listarProductos() {
    this.cargando.set(true)

    this.productService.listarProductos().subscribe({
      next: (datos) => {
        this.productosSignal.set(datos)
      },
      error: () => {
        console.error('ocurrio un error')
      },
      complete: () => {
        this.cargando.set(false)
      }
    })
  }

  // TODO: crearProducto o actualizarProducto según productoEnEdicionId, con
  // subscribe({ next, error }). En next: reload() + cancelarEdicion(). En error: mensajeError.
  guardarProducto(): void {

    this.cargando.set(true)

    const observable$ = this.productoEnEdicionId === null
      ? this.productService.crearProducto(this.formulario)
      : this.productService.actualizarProducto(this.productoEnEdicionId, this.formulario)

    observable$.subscribe({
      next: () => {
        this.listarProductos()
      },
      error: () => {
        // this.mensajeError.set('Ocurrio un error al guardar el producto')
        alert('Ocurrio un error al guardar el producto')
        this.cargando.set(false)
      },
      complete: () => {
        this.cargando.set(false)
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
    this.productService.eliminarProducto(id).subscribe({
      next: () => {
        this.listarProductos()
      },
      error: () => {
        // this.mensajeError.set('Ocurrio un error al guardar el producto')
        alert('Ocurrio un error al eliminar el producto')
        this.cargando.set(false)
      },
      complete: () => {
        this.cargando.set(false)
      }
    })
  }

  // TODO: limpiar formulario y productoEnEdicionId.
  cancelarEdicion(): void {
    this.productoEnEdicionId = null
    this.formulario = { name: '', price: 0, image: '' }
  }
}
