import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaClientModule } from './prisma-client/prisma-client.module';

@Module({
  imports: [UsersModule, PrismaClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
