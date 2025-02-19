import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {PlacesService} from './places.service';
import {CreatePlaceDto} from './dto/create-place.dto';
import {UpdatePlaceDto} from './dto/update-place.dto';

@Controller('config/places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) { }

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(+id, updatePlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(+id);
  }
}
