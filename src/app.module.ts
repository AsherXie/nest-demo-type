import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',
      port: 3306,
      username: 'root',
      password: '',
      timezone: 'Z', // MySQL 服务器上配置的时区。这用于将服务器日期/时间值强制转换为 JavaScript Date 对象，反之亦然。该值可以是`local`，`Z`或`+HHMM`或`-HHMM`形式的偏移。 （默认：`local`）
      database: 'SCHOLL_MAIN_ADMIN',
      entities: ['dist/modules/**/*.entity{.ts,.js}'],
      synchronize: false, // 自动创建结构
      dateStrings: true, //自动转换时间
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
