import { ProductoRepository } from '../../domain/repositories/producto.repository';

interface ActualizarProductoDTO {
  id: string;
  nombre?: string;
  descripcion?: string;
  precio?: number;
  stock?: number;
}

export class ActualizarProductoUseCase {
  constructor(private readonly repo: ProductoRepository) {}

  async ejecutar(dto: ActualizarProductoDTO) {
    const producto = await this.repo.buscarPorId(dto.id);
    if (!producto) throw new Error('Producto no encontrado');

    producto.actualizar({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
      precio: dto.precio,
      stock: dto.stock,
    });

    return await this.repo.actualizar(producto);
  }
}
