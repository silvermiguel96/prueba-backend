import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { Producto } from '../../domain/entities/producto.entity';

export class BuscarProductoUseCase {
  constructor(private readonly repo: ProductoRepository) {}

  async ejecutar(id: string): Promise<Producto | null> {
    return await this.repo.buscarPorId(id);
  }
}
