import { db } from './index';
import { projects, blogPosts } from './schema';
import { eq, desc, and } from 'drizzle-orm';

export async function getAllProjects() {
	return await db.select().from(projects)
		.where(eq(projects.published, true))
		.orderBy(desc(projects.createdAt));
}

export async function getFeaturedProjects() {
	return await db.select().from(projects)
		.where(and(eq(projects.featured, true), eq(projects.published, true)))
		.orderBy(desc(projects.createdAt));
}

export async function getProjectBySlug(slug: string) {
	const result = await db.select().from(projects)
		.where(and(eq(projects.slug, slug), eq(projects.published, true)))
		.limit(1);
	return result[0] || null;
}

export async function getAllBlogPosts() {
	return await db.select().from(blogPosts)
		.where(eq(blogPosts.published, true))
		.orderBy(desc(blogPosts.createdAt));
}

export async function getBlogPostBySlug(slug: string) {
	const result = await db.select().from(blogPosts)
		.where(and(eq(blogPosts.slug, slug), eq(blogPosts.published, true)))
		.limit(1);
	return result[0] || null;
}

export async function getRelatedBlogPosts(projectId: number) {
	return await db.select().from(blogPosts)
		.where(and(eq(blogPosts.projectId, projectId), eq(blogPosts.published, true)))
		.orderBy(desc(blogPosts.createdAt));
}
