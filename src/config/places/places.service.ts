import {Injectable} from '@nestjs/common';
import {CreatePlaceDto} from './dto/create-place.dto';
import {UpdatePlaceDto} from './dto/update-place.dto';
import {PrismaService} from 'src/prisma.service';

@Injectable()
export class PlacesService {
  constructor(private prisma: PrismaService) { }

  create(createPlaceDto: CreatePlaceDto) {
    return 'This action adds a new place';
  }

  findAll() {
    return this.prisma.place.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} place`;
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} place`;
  }

  remove(id: number) {
    return `This action removes a #${id} place`;
  }
}
