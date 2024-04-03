import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import * as Sesscion from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 配置ejs模板
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static/' });
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 放视图的文件
  app.setViewEngine('ejs');

  // 使用Session进行浏览器会话
  app.use(
    Sesscion({
      secret: 'browser',
      cookie: { maxAge: 1000 * 120 }, // 设置会话有效期为120秒
    }),
  );
  await app.listen(3000);
}
bootstrap();
