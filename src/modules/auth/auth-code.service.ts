import { Injectable } from '@nestjs/common';
import { customAlphabet } from 'nanoid';

@Injectable()
export class NanoIdAuthCodeService {
	async genAlphanumericCode(size: number): Promise<string> {
		return customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', size)();
	}
}
