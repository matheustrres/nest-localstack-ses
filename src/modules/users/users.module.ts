import { Module } from '@nestjs/common';

import { UsersController } from './http/users.controller';
import { UsersService } from './users.service';

import { AuthModule } from '@/modules/auth/auth.module';

@Module({
	imports: [AuthModule],
	providers: [UsersService],
	controllers: [UsersController],
})
export class UsersModule {}
