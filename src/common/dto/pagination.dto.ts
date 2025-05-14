// src/common/dto/pagination.dto.ts
import { IsOptional, IsPositive, Max, Min } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {
  @ApiProperty({ required: false, default: 1, example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ required: false, default: 10, example: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  @Max(100) // Prevent excessively large page sizes
  pageSize?: number = 10;
}