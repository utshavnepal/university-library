
import { integer, pgEnum, pgTable, serial, text, timestamp, date, uuid, varchar} from 'drizzle-orm/pg-core';

export const STATUS_ENUM = pgEnum("status", ['PENDING', 'APPROVED', 'REJECTED'])
export const ROLE = pgEnum("role", ["USER", "ADMIN"])
export const BORROWED_STATUS = pgEnum('borrow_status',['BORROWED', 'RETURNED'])

export const users = pgTable('users_table', {
   id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
   fullName: varchar("full_name", {length:255}).notNull(),
   email:text("email").notNull(),
   universityId:integer("university_id").notNull(),
   password:text("password").notNull(),
   universityCard:text("university_card").notNull(),
   status:STATUS_ENUM('status').default('PENDING'),
   role:ROLE('role').default('USER'),
   lastActivityDate:date("last_activity_date").defaultNow(),
   createdAt: timestamp("created_at",{
    withTimezone:true
   }).defaultNow()

});


