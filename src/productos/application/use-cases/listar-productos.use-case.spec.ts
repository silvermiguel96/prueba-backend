import { ListarProductosUseCase } from './listar-productos.use-case';
import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { Producto } from '../../domain/entities/producto.entity';

describe('ListarProductosUseCase', () => {
  let useCase: ListarProductosUseCase;
  let mockRepo: jest.Mocked<ProductoRepository>;

  beforeEach(() => {
    mockRepo = {
      crear: jest.fn(),
      actualizar: jest.fn(),
      eliminar: jest.fn(),
      buscarPorId: jest.fn(),
      listar: jest.fn(),
    };
    useCase = new ListarProductosUseCase(mockRepo);
  });

  it('debería listar productos correctamente', async () => {
    const productos = [
      new Producto(
        'e5a1e99a-a278-435b-8776-320d929fcc74',
        'Producto de prueba',
        'Este es un producto',
        199.99,
        10,
        new Date('2025-05-08T16:01:24.679Z'),
        new Date('2025-05-08T16:01:24.679Z'),
      ),
    ];

    mockRepo.listar.mockResolvedValue(productos);

    const result = await useCase.execute();

    expect(result).toEqual(productos);
    expect(mockRepo.listar).toHaveBeenCalledTimes(1);
  });
});
