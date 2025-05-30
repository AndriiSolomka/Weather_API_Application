import { Module } from '@nestjs/common';
import { TokenRepository } from './token.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TokenService } from './token.service';

@Module({
  imports: [PrismaModule],
  providers: [TokenRepository, TokenService],
  exports: [TokenService],
})
export class TokenModule {}
