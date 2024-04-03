import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { user_info_table } from './user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([user_info_table])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
