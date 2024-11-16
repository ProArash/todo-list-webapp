'use server';

import { User } from '@prisma/client';
import prisma from '../../utils/PrismaClient';
import { UserDto } from '../../utils/dto/UserDto';

export const createUser = async (userDto: UserDto): Promise<User> => {
	const user = await prisma?.user.create({
		data: {
			...userDto,
		},
	});
	if (!user) {
		throw new Error('new user failed to create.');
	}
	return user;
};
