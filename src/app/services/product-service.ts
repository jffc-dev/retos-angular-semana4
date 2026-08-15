import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IProduct } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

const PRODUCTS_URL = `${environment.supabaseUrl}/product`;

// Headers requeridos por Supabase (PostgREST) en cada petición.
const SUPABASE_HEADERS = {
  apikey: environment.supabaseKey,
  Authorization: `Bearer ${environment.supabaseKey}`,
  'Content-Type': 'application/json',
  Prefer: 'return=representation',
};

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient)

  listarProductos() {
    return this.http.get<IProduct[]>(PRODUCTS_URL, {
      headers: SUPABASE_HEADERS
    })
  }

  crearProducto(producto: Omit<IProduct, 'id'>) {
    return this.http.post<IProduct>(PRODUCTS_URL, producto, {
      headers: SUPABASE_HEADERS
    })
  }

  // Supabase no distingue PUT de PATCH; filtro PostgREST: ?id=eq.<valor>.
  actualizarProducto(id: string, producto: Partial<Omit<IProduct, 'id'>>) {
    return this.http.patch<IProduct>(`${PRODUCTS_URL}?id=eq.${id}`, producto, {
      headers: SUPABASE_HEADERS
    })
  }

  eliminarProducto(id: string) {
    return this.http.delete<IProduct>(`${PRODUCTS_URL}?id=eq.${id}`, {
      headers: SUPABASE_HEADERS
    })
  }
}
