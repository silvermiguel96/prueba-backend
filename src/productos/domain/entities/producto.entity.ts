import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Producto {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal')
  precio: number;

  @Column()
  stock: number;

  @CreateDateColumn({ name: 'creado_en' })
  readonly creadoEn: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizadoEn: Date;

  constructor(
    id: string,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number,
    creadoEn?: Date,
    actualizadoEn?: Date,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.creadoEn = creadoEn ?? new Date();
    this.actualizadoEn = actualizadoEn ?? new Date();
  }

  actualizar(datos: Partial<Omit<Producto, 'id' | 'creadoEn'>>): void {
    if (datos.nombre) this.nombre = datos.nombre;
    if (datos.descripcion) this.descripcion = datos.descripcion;
    if (datos.precio !== undefined) this.precio = datos.precio;
    if (datos.stock !== undefined) this.stock = datos.stock;
    this.actualizadoEn = new Date();
  }
}
