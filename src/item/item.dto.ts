import { IsNotEmpty, IsString } from 'class-validator';

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
