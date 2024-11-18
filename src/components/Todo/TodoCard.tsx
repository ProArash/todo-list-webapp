'use client';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { FaCircleXmark, FaPencil } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

export interface TodoCardProps {
	title: string;
	caption: string;
	status: boolean;
	date: string;
}

const TodoCard: React.FC<TodoCardProps> = ({
	caption,
	status,
	title,
	date,
}) => {
	return (
		<div
			className={`flex flex-col gap-3 w-[250px] h-[250px] bg-secondary rounded-xl p-2 text-foreground border border-primary`}>
			<div className="flex justify-between items-center rounded-md bg-primary p-2">
				<p className="font-bold text-lg">{title}</p>
				<p className="text-onPrimary">
					{status ? <FaCheckCircle /> : <FaCircleXmark />}
				</p>
			</div>
			<p className="text-justify grow bg-primary rounded-md p-1">
				{caption}
			</p>
			<div className="flex justify-between items-center bg-primary rounded-md p-1">
				<CustomButton icon={<FaPencil />} onClick={() => {}} />
				{date}
			</div>
		</div>
	);
};

export default TodoCard;
