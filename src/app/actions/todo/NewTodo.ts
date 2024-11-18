'use server';

import { Todo } from '@prisma/client';
import prisma from '../../../utils/PrismaClient';
import { NewTodoDto } from './NewTodoDto';

export const NewTodo = async (
	todoDto: NewTodoDto | undefined
): Promise<Todo | undefined> => {
	if (todoDto)
		return await prisma?.todo.create({
			data: {
				...todoDto,
			},
		});
};
