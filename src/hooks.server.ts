import { sequence } from '@sveltejs/kit/hooks';
import { auth } from './lib/auth';
import type { Handle } from '@sveltejs/kit';

const logger: Handle = ({ event, resolve }) => {
	console.log('route id', event.route.id);
	return resolve(event);
};

export const handle = sequence(auth, logger);
