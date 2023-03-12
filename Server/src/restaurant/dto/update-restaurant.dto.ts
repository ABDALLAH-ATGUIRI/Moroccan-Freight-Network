import {
  IsString,
  IsOptional,
  IsEmpty,
  IsEnum,
  IsObject,
} from 'class-validator';
import { User } from 'src/auth/schema/user.schema';

export class UpdateRestaurantDto {
  @IsOptional()
  @IsString()
  readonly enterprise: string;

  @IsOptional()
  @IsString()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly phone: string;

  @IsOptional()
  @IsObject()
  readonly location: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }[];

  @IsOptional()
  @IsString()
  readonly tradeRegister: string;

  @IsEmpty({ message: 'Please enter correct category.' })
  readonly user: User;
}
