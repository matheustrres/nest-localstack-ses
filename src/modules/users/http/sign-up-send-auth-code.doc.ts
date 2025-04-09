import { SendSignUpAuthCodeBodyDto } from './sign-up-send-auth-code.dto';

import { SwaggerRoute } from '@/shared/libs/swagger';

export function SendSignUpAuthCodeRouteDoc() {
	return SwaggerRoute({
		operation: {
			description: 'Send a sign-up authentication code',
		},
		body: {
			type: SendSignUpAuthCodeBodyDto,
		},
		responses: [
			{
				status: 409,
				description: 'Email already in use',
			},
			{
				status: 200,
				description: 'Authentication code successfully sent',
			},
		],
	});
}
