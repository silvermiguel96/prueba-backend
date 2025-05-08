import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { Producto } from '../../domain/entities/producto.entity';

export class ListarProductosUseCase {
  constructor(private readonly repo: ProductoRepository) {}

  async ejecutar(): Promise<Producto[]> {
    return await this.repo.listar();
  }
}
