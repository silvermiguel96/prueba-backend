import { Producto } from '../entities/producto.entity';

export const PRODUCTO_REPOSITORY = 'PRODUCTO_REPOSITORY';

export interface ProductoRepository {
  crear(producto: Producto): Promise<Producto>;
  actualizar(producto: Producto): Promise<Producto>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Producto | null>;
  listar(): Promise<Producto[]>;
}
