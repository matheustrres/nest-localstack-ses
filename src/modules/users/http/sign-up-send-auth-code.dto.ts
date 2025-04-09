import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendSignUpAuthCodeBodyDto {
	@ApiProperty({
		type: 'string',
		required: true,
	})
	@IsString()
	@IsNotEmpty()
	name!: string;

	@ApiProperty({
		type: 'string',
		required: true,
	})
	@IsString()
	@IsEmail()
	@IsNotEmpty()
	email!: string;
}
