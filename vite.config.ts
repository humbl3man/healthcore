import { sveltekit } from '@sveltejs/kit/vite';
import dotenvExpand from 'dotenv-expand';
import { loadEnv, defineConfig } from 'vite';

// https://github.com/vercel/storage/tree/main/packages/postgres#a-note-for-vite-users

export default defineConfig(({ mode }) => {
	if (mode === 'development') {
		const env = loadEnv(mode, process.cwd(), '');
		dotenvExpand.expand({ parsed: env });
	}
	return {
		plugins: [sveltekit()]
	};
});
