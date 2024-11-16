'use server';
import { Todo } from '@prisma/client';
import prisma from '../../../utils/PrismaClient';

export const getAllTodos = async (): Promise<Todo[]> => {
	let todos = await prisma?.todo.findMany();
	if (todos?.length === 0) {
		const tList = [
			{
				title: 'Todo 1',
				caption: 'Caption 1',
				date: 'March 2024',
				status: true,
			},
			{
				title: 'Todo 2',
				caption: 'Caption 2',
				date: 'March 2022',
				status: true,
			},
			{
				title: 'Todo 3',
				caption: 'Caption 3',
				date: 'March 2023',
				status: true,
			},
			{
				title: 'Todo 4',
				caption: 'Caption 4',
				date: 'March 2024',
				status: true,
			},
			{
				title: 'Todo 5',
				caption: 'Caption 5',
				date: 'March 2021',
				status: true,
			},
			{
				title: 'Todo 6',
				caption: 'Caption 6',
				date: 'March 2020',
				status: true,
			},
		];
		todos = await prisma?.todo.createManyAndReturn({
			data: tList,
		});
	}
	if (!todos) {
		throw new Error('no todo list');
	}
	return todos;
};
