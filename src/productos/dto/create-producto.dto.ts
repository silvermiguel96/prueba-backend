import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsNumber()
  @Min(0)
  readonly precio: number;

  @IsNumber()
  @Min(0)
  readonly stock: number;
}