import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  GetsTest() {
    return 'hello';
  }
}
