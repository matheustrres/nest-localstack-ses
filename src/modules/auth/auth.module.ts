import { Module } from '@nestjs/common';

import { NanoIdAuthCodeService } from './auth-code.service';
import { AwsSESMailingService } from './ses-mailing.service';

@Module({
	providers: [NanoIdAuthCodeService, AwsSESMailingService],
	exports: [NanoIdAuthCodeService, AwsSESMailingService],
})
export class AuthModule {}
