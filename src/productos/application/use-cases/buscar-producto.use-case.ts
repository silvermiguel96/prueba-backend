import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { ApiError } from '../../../common/exceptions/api-error';
import { Producto } from '../../domain/entities/producto.entity';

export class BuscarProductoUseCase {
  constructor(private readonly repo: ProductoRepository) {}

  async execute(id: string): Promise<Producto | null> {
    const producto = await this.repo.buscarPorId(id);
    if (!producto) {
      throw new ApiError(404, 'Producto no encontrado', [
        'Por favor, asegúrese de que el ID del producto es correcto.',
      ]);
    }
    return producto;
  }
}
