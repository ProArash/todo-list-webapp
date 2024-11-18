'use server';
import { Todo } from '@prisma/client';
import prisma from '../../../utils/PrismaClient';

export const getAllTodos = async (): Promise<Todo[] | undefined> => {
	return await prisma?.todo.findMany();
};
