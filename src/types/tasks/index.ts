import { UserAttributes } from '../users'

export enum TaskStatus {
	TODO = 'TODO',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE',
}

export type TaskCreationAttributes = {
	title: string
	description: string
	status?: TaskStatus
}

export type TaskAttributes = {
	id: string
	title: string
	description: string
	status: TaskStatus
	assignedUserId?: string
	assignedUser?: UserAttributes
}
