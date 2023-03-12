import { User } from './../../auth/schema/user.schema';

import { IsNotEmpty, IsString, IsEmpty, IsObject } from 'class-validator';
export class CreateRestaurantDto {
  @IsNotEmpty()
  @IsString()
  readonly enterprise: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsObject()
  readonly location: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }[];

  @IsNotEmpty()
  @IsString()
  readonly tradeRegister: string;

  @IsEmpty({ message: 'Please enter correct category.' })
  readonly user: User;
}
