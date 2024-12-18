import { ConsoleLogger, Logger, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [PassportModule, ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, GoogleStrategy, Logger],
})
export class AuthModule {}
