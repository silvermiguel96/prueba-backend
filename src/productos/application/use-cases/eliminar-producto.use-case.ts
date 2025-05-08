import { ProductoRepository } from '../../domain/repositories/producto.repository';

export class EliminarProductoUseCase {
  constructor(private readonly repo: ProductoRepository) {}

  async execute(id: string): Promise<void> {
    return await this.repo.eliminar(id);
  }
}
