import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {  

  @Get('greetings')
  getHello(): string {
    return "hello world";
  }
}
