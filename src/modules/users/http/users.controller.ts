import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SendSignUpAuthCodeRouteDoc } from './sign-up-send-auth-code.doc';
import { SendSignUpAuthCodeBodyDto } from './sign-up-send-auth-code.dto';

import { UsersService } from '../users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('sign-up/send-auth-code')
	@HttpCode(HttpStatus.OK)
	@SendSignUpAuthCodeRouteDoc()
	async sendSignUpAuthCodeRoute(
		@Body() { email, name }: SendSignUpAuthCodeBodyDto,
	): Promise<void> {
		return this.usersService.sendSignUpAuthCode(email, name);
	}
}
