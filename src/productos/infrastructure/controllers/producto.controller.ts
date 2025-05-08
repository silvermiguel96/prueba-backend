import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CrearProductoUseCase } from '../../application/use-cases/crear-producto.use-case';
import { BuscarProductoUseCase } from '../../application/use-cases/buscar-producto.use-case';
import { ActualizarProductoUseCase } from '../../application/use-cases/actualizar-producto.use-case';
import { EliminarProductoUseCase } from '../../application/use-cases/eliminar-producto.use-case';
import { ListarProductosUseCase } from 'src/productos/application/use-cases/listar-productos.use-case';

import { CreateProductoDto } from '../../dto/create-producto.dto';
import { UpdateProductoDto } from '../../dto/update-producto.dto';

@Controller('v1/productos')
export class ProductoController {
  constructor(
    private readonly createUC: CrearProductoUseCase,
    private readonly getUC: BuscarProductoUseCase,
    private readonly updateUC: ActualizarProductoUseCase,
    private readonly deleteUC: EliminarProductoUseCase,
    private readonly listUC: ListarProductosUseCase,
  ) {}

  @Get()
  findAll() {
    return this.listUC.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getUC.execute(id);
  }

  @Post()
  create(@Body() body: CreateProductoDto) {
    return this.createUC.execute(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateProductoDto) {
    return this.updateUC.execute({ id, ...body });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteUC.execute(id);
  }
}
