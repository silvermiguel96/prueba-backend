import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { Producto } from '../../domain/entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoRepositoryImpl implements ProductoRepository {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  async crear(producto: Producto): Promise<Producto> {
    return await this.productoRepo.save(producto);
  }

  async actualizar(producto: Producto): Promise<Producto> {
    return await this.productoRepo.save(producto);
  }

  async eliminar(id: string): Promise<void> {
    await this.productoRepo.delete(id);
  }

  async buscarPorId(id: string): Promise<Producto | null> {
    return await this.productoRepo.findOneBy({ id });
  }

  async listar(): Promise<Producto[]> {
    return await this.productoRepo.find();
  }
}
