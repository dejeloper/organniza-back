import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PrismaService} from './prisma.service';
import {ProductsModule} from './products/products.module';
import { PlacesModule } from './config/places/places.module';

@Module({
  imports: [ProductsModule, PlacesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule { }
