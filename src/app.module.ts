import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { BookingModule } from './booking/booking.module';
import { CarModule } from './car/car.module';
import { CustomerModule } from './customer/customer.module';
import { LocationModule } from './location/location.module';
import { MessageModule } from './message/message.module';
import { RatingModule } from './rating/rating.module';
import { RideModule } from './ride/ride.module';
import { RiderModule } from './rider/rider.module';
import { UserModule } from './user/user.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    RiderModule,
    CustomerModule,
    CarModule,
    RideModule,
    LocationModule,
    AddressModule,
    MessageModule,
    BookingModule,
    RatingModule,
    ImageModule,
  ],

})
export class AppModule {}
