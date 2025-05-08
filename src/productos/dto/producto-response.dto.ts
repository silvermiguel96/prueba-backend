export class ProductoResponseDto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  creadoEn: Date;
  actualizadoEn: Date;

  constructor(props: {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    creadoEn: Date;
    actualizadoEn: Date;
  }) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.descripcion = props.descripcion;
    this.precio = props.precio;
    this.stock = props.stock;
    this.creadoEn = props.creadoEn;
    this.actualizadoEn = props.actualizadoEn;
  }

  static fromEntity(entity: any): ProductoResponseDto {
    return new ProductoResponseDto({
      id: entity.id,
      nombre: entity.nombre,
      descripcion: entity.descripcion,
      precio: entity.precio,
      stock: entity.stock,
      creadoEn: entity.creadoEn,
      actualizadoEn: entity.actualizadoEn,
    });
  }
}
