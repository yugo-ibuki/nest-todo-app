import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateItemDTO {
  // 空文字NG，string型指定
  @IsNotEmpty()
  @IsString()
  todo: string;

  @IsNotEmpty()
  @IsString()
  limit: string;

  @IsNotEmpty()
  @IsString()
  deletePassword: string;
}

export class UpdateItemDTO {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  todo: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  limit: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  isDone: string;
}