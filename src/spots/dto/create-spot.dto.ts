import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSpotDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
