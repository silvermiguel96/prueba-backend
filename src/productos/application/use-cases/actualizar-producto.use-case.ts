import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { ApiError } from '../../../common/exceptions/api-error';

interface ActualizarProductoDTO {
  id: string;
  nombre?: string;
  descripcion?: string;
  precio?: number;
  stock?: number;
}

export class ActualizarProductoUseCase {
  constructor(private readonly repo: ProductoRepository) {}

  async execute(dto: ActualizarProductoDTO) {
    const producto = await this.repo.buscarPorId(dto.id);
    if (!producto) {
      throw new ApiError(404, 'Producto no encontrado', [
        'Por favor, asegúrese de que el ID del producto es correcto.',
      ]);
    }

    producto.actualizar({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
      precio: dto.precio,
      stock: dto.stock,
    });

    return await this.repo.actualizar(producto);
  }
}
