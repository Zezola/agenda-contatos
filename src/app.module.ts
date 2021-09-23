import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ContaController } from './controllers/conta.controller';
import { AppService } from './app.service';
import { ContaService } from './services/conta.service';

@Module({
  imports: [],
  controllers: [AppController, ContaController],
  providers: [AppService, ContaService],
})
export class AppModule {}
