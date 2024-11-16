'use client';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { FaPencil } from 'react-icons/fa6';

type cardColor = 'red' | 'yellow' | 'blue';

export interface TodoCardProps {
	title: string;
	caption: string;
	className?: string;
	status: boolean;
	date: string;
	color?: cardColor;
}

const TodoCard: React.FC<TodoCardProps> = ({
	caption,
	status,
	title,
	date,
	className,
}) => {
	return (
		<div
			className={`flex flex-col gap-3 w-[250px] h-[250px] p-3 rounded-xl text-foreground ${className}`}>
			<div className="flex justify-between items-center">
				<p className="font-bold text-lg">{title}</p>
				{status}
			</div>
			<p className="text-justify grow">{caption}</p>
			<div className="flex justify-between bottom-0">
				<CustomButton icon={<FaPencil />} onClick={() => {}} />
				{date}
			</div>
		</div>
	);
};

export default TodoCard;
