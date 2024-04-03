import { Controller, Get, Res, Session } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUserInfo() {
    return this.userService.getList();
  }

  @Get('/get_image_code')
  async getImageCode(@Res() res: Response, @Session() session) {
    res.type('svg');
    const captcha = await this.userService.getImageCaptcha();
    session.captcha = captcha.text;
    res.send(captcha.data);
  }
}
