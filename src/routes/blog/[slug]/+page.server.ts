import { sql } from '@vercel/postgres';

export async function load({ params }) {
	return {
		blog: await sql`SELECT * FROM blog WHERE id = ${params.slug}`
	};
}
