import { TicketKind } from '@prisma/client';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class ReserveSpotDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  spots: string[];

  @IsEnum(TicketKind)
  @IsNotEmpty()
  ticket_kind: TicketKind;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
