import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { Producto } from '../../domain/entities/producto.entity';
import { v4 as uuidv4 } from 'uuid';

interface CrearProductoDTO {
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
}

export class CrearProductoUseCase {
  constructor(private readonly repo: ProductoRepository) {}

  async execute(dto: CrearProductoDTO): Promise<Producto> {
    const nuevo = new Producto(
      uuidv4(),
      dto.nombre,
      dto.descripcion,
      dto.precio,
      dto.stock,
      new Date(),
      new Date(),
    );
    return await this.repo.crear(nuevo);
  }
}
