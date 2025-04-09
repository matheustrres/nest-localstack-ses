import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';
import { Injectable } from '@nestjs/common';

type SendMailOptions = {
	from: string;
	to: string | string[];
	subject: string;
	bcc?: string | string[];
	headers?: Record<string, string>;
	attachments?: Array<{
		content?: string | Buffer;
		filename?: string;
		path?: string;
	}>;
	text: string;
	html?: string;
};

@Injectable()
export class AwsSESMailingService {
	readonly #ses: SESClient;

	constructor() {
		this.#ses = new SESClient({
			region: 'us-east-1',
			endpoint: 'http://localhost:4566',
			credentials: {
				accessKeyId: 'test',
				secretAccessKey: 'test',
			},
		});
	}

	async sendMail(options: SendMailOptions): Promise<void> {
		try {
			const res = await this.#ses.send(
				new SendEmailCommand({
					Source: options.from,
					Destination: {
						ToAddresses: [options.to.toString()],
					},
					Message: {
						Body: {
							Html: {
								Data: options.html,
							},
							Text: {
								Data: options.text,
							},
						},
						Subject: {
							Data: options.subject,
						},
					},
				}),
			);
			console.log(res);
		} catch (error) {
			throw error;
		}
	}
}
