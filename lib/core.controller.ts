'use strict';

import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoreController {
  @Get('ping')
  checkStatus() {
    return 'pong';
  }
}
