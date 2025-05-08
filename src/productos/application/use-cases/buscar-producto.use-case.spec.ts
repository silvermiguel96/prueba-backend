import { BuscarProductoUseCase } from './buscar-producto.use-case';
import { ProductoRepository } from '../../domain/repositories/producto.repository';
import { Producto } from '../../domain/entities/producto.entity';
import { ApiError } from '../../../common/exceptions/api-error';

describe('BuscarProductoUseCase', () => {
  let useCase: BuscarProductoUseCase;
  let mockProductoRepository: jest.Mocked<ProductoRepository>;

  beforeEach(() => {
    mockProductoRepository = {
      buscarPorId: jest.fn(),
    } as unknown as jest.Mocked<ProductoRepository>;

    useCase = new BuscarProductoUseCase(mockProductoRepository);
  });

  it('debería retornar el producto si existe', async () => {
    const producto: Producto = {
      id: 'test-id',
      nombre: 'Producto de prueba',
      descripcion: 'Este es un producto',
      precio: 199.99,
      stock: 10,
      creadoEn: new Date(),
      actualizadoEn: new Date(),
      actualizar: jest.fn(),
    };

    mockProductoRepository.buscarPorId.mockResolvedValue(producto);

    const resultado = await useCase.execute('test-id');
    expect(resultado).toEqual(producto);
  });

  it('debería lanzar ApiError si el producto no existe', async () => {
    mockProductoRepository.buscarPorId.mockResolvedValue(null);

    await expect(useCase.execute('no-existe')).rejects.toThrow(ApiError);
    await expect(useCase.execute('no-existe')).rejects.toThrow(
      'Producto no encontrado',
    );
  });
});
