export async function handle({ event, resolve }) {
	// console.log('hooks server', event);
	console.log('route id', event.route.id);
	console.log('locals', event.locals);
	return resolve(event);
}
