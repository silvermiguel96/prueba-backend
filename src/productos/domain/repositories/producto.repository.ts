import { Producto } from '../entities/producto.entity';

export interface ProductoRepository {
  crear(producto: Producto): Promise<Producto>;
  actualizar(producto: Producto): Promise<Producto>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Producto | null>;
  listar(): Promise<Producto[]>;
}
