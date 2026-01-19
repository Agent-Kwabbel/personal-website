import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const handle: Handle = async ({ event, resolve }) => {
	const maintenanceMode = env.MAINTENANCE_MODE === 'true';

	if (maintenanceMode && !event.url.pathname.startsWith('/maintenance')) {
		throw redirect(302, '/maintenance');
	}

	return resolve(event);
};
