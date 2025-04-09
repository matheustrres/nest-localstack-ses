import { Injectable } from '@nestjs/common';

import { NanoIdAuthCodeService } from '@/modules/auth/auth-code.service';
import { AwsSESMailingService } from '@/modules/auth/ses-mailing.service';

@Injectable()
export class UsersService {
	constructor(
		private readonly authCodeService: NanoIdAuthCodeService,
		private readonly mailingService: AwsSESMailingService,
	) {}

  async sendSignUpAuthCode(email: string, name: string): Promise<void> {
    const code = await this.authCodeService.genAlphanumericCode(6);

    const appMail = process.env['APP_MAIL'] as string;

    await this.mailingService.sendMail({
      from: appMail,
      to: email,
      subject: 'Código de confirmação de Email',
      text: `Seu código de validação é ${code}`,
      html: `<p>Olá ${name},</p><p>Seu código de validação é <strong>${code}</strong></p>`,
    });
  }
}
