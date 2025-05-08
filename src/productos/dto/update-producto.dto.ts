import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateProductoDto {
  @IsString()
  @IsOptional()
  readonly nombre?: string;

  @IsString()
  @IsOptional()
  readonly descripcion?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly precio?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly stock?: number;
}
