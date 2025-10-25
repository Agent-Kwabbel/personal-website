import { pgTable, serial, text, timestamp, boolean, integer, jsonb } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	slug: text('slug').notNull().unique(),
	description: text('description').notNull(),
	content: text('content').notNull(),
	coverImage: text('cover_image'),
	projectUrl: text('project_url'),
	githubUrl: text('github_url'),
	technologies: text('technologies').array(),
	collaborators: jsonb('collaborators').$type<Array<{ name: string; role: string }>>(),
	status: text('status').notNull().default('draft'),
	featured: boolean('featured').default(false).notNull(),
	published: boolean('published').default(false).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const blogPosts = pgTable('blog_posts', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	slug: text('slug').notNull().unique(),
	description: text('description').notNull(),
	content: text('content').notNull(),
	coverImage: text('cover_image'),
	status: text('status').notNull().default('draft'),
	published: boolean('published').default(false).notNull(),
	tags: text('tags').array(),
	projectId: integer('project_id').references(() => projects.id),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});
