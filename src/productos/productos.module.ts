import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './domain/entities/producto.entity';
import { ProductoController } from './infrastructure/controllers/producto.controller';

// Use Cases
import { CrearProductoUseCase } from './application/use-cases/crear-producto.use-case';
import { BuscarProductoUseCase } from './application/use-cases/buscar-producto.use-case';
import { ActualizarProductoUseCase } from './application/use-cases/actualizar-producto.use-case';
import { EliminarProductoUseCase } from './application/use-cases/eliminar-producto.use-case';
import { ListarProductosUseCase } from './application/use-cases/listar-productos.use-case';

import { ProductoRepositoryImpl } from './infrastructure/repositories/producto.repository.impl';
import { PRODUCTO_REPOSITORY } from './domain/repositories/producto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductoController],
  providers: [
    {
      provide: PRODUCTO_REPOSITORY,
      useClass: ProductoRepositoryImpl,
    },
    {
      provide: ListarProductosUseCase,
      useFactory: (repo: ProductoRepositoryImpl) => new ListarProductosUseCase(repo),
      inject: [PRODUCTO_REPOSITORY],
    },
    {
      provide: CrearProductoUseCase,
      useFactory: (repo: ProductoRepositoryImpl) => new CrearProductoUseCase(repo),
      inject: [PRODUCTO_REPOSITORY],
    },
    {
      provide: BuscarProductoUseCase,
      useFactory: (repo: ProductoRepositoryImpl) => new BuscarProductoUseCase(repo),
      inject: [PRODUCTO_REPOSITORY],
    },
    {
      provide: ActualizarProductoUseCase,
      useFactory: (repo: ProductoRepositoryImpl) => new ActualizarProductoUseCase(repo),
      inject: [PRODUCTO_REPOSITORY],
    },
    {
      provide: EliminarProductoUseCase,
      useFactory: (repo: ProductoRepositoryImpl) => new EliminarProductoUseCase(repo),
      inject: [PRODUCTO_REPOSITORY],
    },
  ],
})
export class ProductosModule {}
