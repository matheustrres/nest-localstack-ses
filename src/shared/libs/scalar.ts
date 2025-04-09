import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

export function setupScalarReference(
	app: INestApplication,
	document: OpenAPIObject,
): void {
	app.use(
		'/reference',
		apiReference({
			theme: 'bluePlanet',
			spec: {
				content: document,
			},
			_integration: 'nestjs',
			darkMode: true,
			defaultHttpClient: {
				clientKey: 'node',
				targetKey: 'node',
			},
			hideModels: true,
			layout: 'classic',
		}),
	);
}
