import { ActualizarProductoUseCase } from './actualizar-producto.use-case';
import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { Producto } from '../../domain/entities/producto.entity';
import { ApiError } from '../../../common/exceptions/api-error';

describe('ActualizarProductoUseCase', () => {
  let useCase: ActualizarProductoUseCase;
  let mockRepo: jest.Mocked<ProductoRepository>;

  beforeEach(() => {
    mockRepo = {
      crear: jest.fn(),
      actualizar: jest.fn(),
      eliminar: jest.fn(),
      buscarPorId: jest.fn(),
      listar: jest.fn(),
    };
    useCase = new ActualizarProductoUseCase(mockRepo);
  });

  it('debería actualizar el producto correctamente', async () => {
    const producto = new Producto(
      'e5a1e99a-a278-435b-8776-320d929fcc74',
      'Producto de prueba',
      'Este es un producto',
      199.99,
      10,
      new Date('2025-05-08T16:01:24.679Z'),
      new Date('2025-05-08T16:01:24.679Z'),
    );

    mockRepo.buscarPorId.mockResolvedValue(producto);
    mockRepo.actualizar.mockResolvedValue(producto);

    const result = await useCase.execute({
      id: producto.id,
      nombre: 'Nuevo nombre',
    });

    expect(result).toEqual(producto);
    expect(mockRepo.actualizar).toHaveBeenCalled();
  });

  it('debería lanzar error si el producto no existe', async () => {
    mockRepo.buscarPorId.mockResolvedValue(null);

    await expect(
      useCase.execute({ id: 'no-existe', nombre: 'Algo' }),
    ).rejects.toThrow(ApiError);
  });
});
