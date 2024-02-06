import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetController } from './controller/pet.controller';
import { PetService } from './services/pet.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import User from './entitices/user.entities';
import PurchaseOrder from './entitices/purcaseorder.entities';
import Pet from './entitices/pet.entities';
import PetBaseEntity from './entitices/Petbaseentity.entities';
import { PurchaseOrderController } from './controller/purchaseorder.controller';
import { UserController } from './controller/user.controller';
import { PetBaseEntityController } from './controller/petbaseentity.controller';
import { PurchaseorderService } from './services/purchase.service';
import { PetBaseEntityService } from './services/petbaseentity.service';
import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './userlogin/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        let option: TypeOrmModuleOptions = {
          type: "sqlite",
          database: configService.get<string>("DATABASE_NAME", 'database.db'),
          entities: [User, Pet, PurchaseOrder, PetBaseEntity],
          synchronize: true,
        }
        return option;
      },
      inject: [ConfigService]
    }),

    TypeOrmModule.forFeature([Pet, User, PurchaseOrder, PetBaseEntity]),
    JwtModule,
    AuthModule,
    UsersModule
  ],

  controllers: [AppController, PetController, PurchaseOrderController, UserController, PetBaseEntityController],
  providers: [AppService, PetService, PurchaseorderService,PetBaseEntityService, UserService,AuthService,
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }
  ],
})
export class AppModule { }
