import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaurant.service';
import { Company } from './schemas/company.schema';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get()
  async getAllRestaurants(@Query() query: ExpressQuery): Promise<Company[]> {
    return this.restaurantService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createRestaurant(
    @Body() restaurant: CreateRestaurantDto,
    @Req() req,
  ): Promise<Company> {    
    return this.restaurantService.create( restaurant , req.user);
  }

  @Get(':id')
  async getRestaurant(@Param('id') id: string): Promise<Company> {
    return this.restaurantService.findById(id);
  }

  @Put(':id')
  async updateRestaurant(
    @Param('id')
    id: string,
    @Body()
    restaurant: UpdateRestaurantDto,
  ): Promise<Company> {
    return this.restaurantService.updateById(id, restaurant);
  }

  @Put(':id')
  async deleteRestaurant(
    @Param('id')
    id: string,
  ): Promise<Company> {
    return this.restaurantService.deleteById(id);
  }
}
