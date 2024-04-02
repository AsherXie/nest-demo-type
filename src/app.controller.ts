import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';

interface HtmlController {
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('index')
  @Render('ssb')
  getIndexHtml(): HtmlController {
    return { message: 'hello ejs!' };
  }
}
