import { pgTable, integer, boolean, text, uuid, timestamp } from 'drizzle-orm/pg-core';
import { Relation, relations } from 'drizzle-orm';
import path from 'path';

export const files = pgTable('files', {
    id: uuid('id').defaultRandom().primaryKey(),

    // basic file information
    name: text('name').notNull(),
    path: text('path').notNull(), // ex: /images/folder/file.jpg
    size: integer('size').notNull(),
    type: text('type').notNull(), // mime type (folder or file - jpg, png, etc)

    // storage information
    fileUrl: text('file_url').notNull(),
    thumbnailUrl: text('thumbnail_url'),

    // Ownership
    userId: text('user_id').notNull(),
    parentId: uuid('parent_id'), // null if root folder

    // file/folder flags
    isFolder: boolean('is_folder').notNull().default(false),
    isStarred: boolean('is_starred').notNull().default(false),
    isTrashed: boolean('is_trashed').notNull().default(false),

    // timestamps
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

// ? Understand how to use relations

export const filesRelations = relations(files, ({ one, many }) => ({
    parent: one(files, {
        fields: [files.parentId],
        references: [files.id],
    }),

    children: many(files),
}));

// ? Understand how to use the $inferSelect type

export const File = typeof files.$inferSelect;
export const NewFile = typeof files.$inferInsert;
