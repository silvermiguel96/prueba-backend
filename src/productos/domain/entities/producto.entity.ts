export class Producto {
  constructor(
    public readonly id: string,
    public nombre: string,
    public descripcion: string,
    public precio: number,
    public stock: number,
    public readonly creadoEn: Date,
    public actualizadoEn: Date,
  ) {}

  actualizar(datos: Partial<Omit<Producto, 'id' | 'creadoEn'>>): void {
    if (datos.nombre) this.nombre = datos.nombre;
    if (datos.descripcion) this.descripcion = datos.descripcion;
    if (datos.precio !== undefined) this.precio = datos.precio;
    if (datos.stock !== undefined) this.stock = datos.stock;
    this.actualizadoEn = new Date();
  }
}
