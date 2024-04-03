import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_info_table } from './user.entity';
import { Repository } from 'typeorm';
import { create } from 'svg-captcha';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user_info_table)
    private readonly userRepository: Repository<user_info_table>,
  ) {}

  async getList(): Promise<user_info_table[]> {
    return await this.userRepository.manager.find(user_info_table, {
      where: { id: 1 },
    });
  }

  async login(): Promise<user_info_table[]> {
    return await this.userRepository.manager.find(user_info_table, {
      where: { id: 1 },
    });
  }

  async reg(): Promise<user_info_table[]> {
    return await this.userRepository.manager.find(user_info_table, {
      where: { id: 1 },
    });
  }

  async getImageCaptcha() {
    const captcha = create({
      size: 4,
      fontSize: 50,
    });
    return captcha;
  }
}
