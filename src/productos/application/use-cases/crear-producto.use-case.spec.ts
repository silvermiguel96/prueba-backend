import { CrearProductoUseCase } from './crear-producto.use-case';
import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { Producto } from '../../domain/entities/producto.entity';

describe('CrearProductoUseCase', () => {
  let useCase: CrearProductoUseCase;
  let mockRepo: jest.Mocked<ProductoRepository>;

  beforeEach(() => {
    mockRepo = {
      crear: jest.fn(),
      actualizar: jest.fn(),
      eliminar: jest.fn(),
      buscarPorId: jest.fn(),
      listar: jest.fn(),
    };
    useCase = new CrearProductoUseCase(mockRepo);
  });

  it('debería crear un producto correctamente', async () => {
    const productoCreado = new Producto(
      'e5a1e99a-a278-435b-8776-320d929fcc74',
      'Producto de prueba',
      'Este es un producto',
      199.99,
      10,
      new Date('2025-05-08T16:01:24.679Z'),
      new Date('2025-05-08T16:01:24.679Z'),
    );

    mockRepo.crear.mockResolvedValue(productoCreado);

    const result = await useCase.execute({
      nombre: 'Producto de prueba',
      descripcion: 'Este es un producto',
      precio: 199.99,
      stock: 10,
    });

    expect(result).toEqual(productoCreado);
    expect(mockRepo.crear).toHaveBeenCalledTimes(1);
  });
});
