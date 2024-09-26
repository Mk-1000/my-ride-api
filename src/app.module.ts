import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import { CustomerModule } from './customer/customer.module';
import { RiderModule } from './rider/rider.module';
import { UserModule } from './user/user.module';
import { RideModule } from './ride/ride.module';
import { LocationModule } from './location/location.module';
import { AddressService } from './address/address.service';
import { AddressController } from './address/address.controller';
import { AddressModule } from './address/address.module';

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
  ],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AppModule {}
