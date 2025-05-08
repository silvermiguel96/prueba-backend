import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { ApiError } from '../../../common/exceptions/api-error';

export class EliminarProductoUseCase {
  constructor(private readonly repo: ProductoRepository) {}

  async execute(id: string): Promise<void> {
    const producto = await this.repo.buscarPorId(id);
    if (!producto) {
      throw new ApiError(404, 'Producto no encontrado', [
        'Verifica que el ID proporcionado sea correcto.',
      ]);
    }

    await this.repo.eliminar(id);
  }
}
