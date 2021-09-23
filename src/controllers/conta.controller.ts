import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { ContaService } from '../services/conta.service';

@Controller("conta")
export class ContaController {
  constructor(private readonly ContaService: ContaService) {}

  @Get()
  getHello(): string {
    return this.ContaService.getHello();
  }
}
