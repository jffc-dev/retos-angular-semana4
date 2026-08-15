import { Component, inject, signal } from '@angular/core';
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
  mensajeError = '';
  productosSignal = signal<IProduct[]>([])

  listarProductos() {
    this.productService.listarProductos().subscribe((datos)=>{
      this.productosSignal.set(datos)
    })
  }

  // TODO: crearProducto o actualizarProducto según productoEnEdicionId, con
  // subscribe({ next, error }). En next: reload() + cancelarEdicion(). En error: mensajeError.
  guardarProducto(): void {

    if(this.productoEnEdicionId === null){
      this.productService.crearProducto(this.formulario).subscribe((dato) => {
        this.listarProductos()
      })
    } else {
      this.productService.actualizarProducto(this.productoEnEdicionId, this.formulario).subscribe((dato) => {
        this.listarProductos()
      })
    }
  }

  // TODO: precargar "formulario" con los datos de "producto" y guardar su id en productoEnEdicionId.
  editarProducto(producto: IProduct): void {
    this.productoEnEdicionId = producto.id
    this.formulario = { name: producto.name, price: producto.price, image: producto.image }
  }

  // TODO: confirm() nativo y, si acepta, eliminarProducto(id) con subscribe({ next, error }).
  // En next: reload(). En error: mensajeError.
  eliminarProducto(id: string): void {
    this.productService.eliminarProducto(id).subscribe(() => {
      this.listarProductos()
    })
  }

  // TODO: limpiar formulario y productoEnEdicionId.
  cancelarEdicion(): void {
    this.productoEnEdicionId = null
  }
}
