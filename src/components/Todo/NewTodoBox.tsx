'use client';
import { useState } from 'react';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import { FaPlusCircle } from 'react-icons/fa';
import { NewTodo } from '../../app/actions/todo/NewTodo';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

const NewTodoBox = () => {
	const [title, setTitle] = useState<string>('');
	const [caption, setCaption] = useState<string>('');
	const [date, setDate] = useState<string>('');
	const [status, setStatus] = useState<boolean>(false);
	const addTodo = async () => {
		await NewTodo({
			title,
			caption,
			date,
			status,
		});
	};
	return (
		<div className="flex flex-col gap-2">
			<CustomInput
				onChange={(e) => setTitle(e)}
				value={title}
				label="Todo title"
			/>
			<CustomInput
				onChange={(e) => setCaption(e)}
				value={caption}
				label="Caption"
			/>
			<CustomInput
				onChange={(e) => setDate(e)}
				value={date}
				label="Date"
			/>
			<CustomCheckbox checked={status} onChange={(e) => setStatus(e)} />
			<CustomButton onClick={() => addTodo()} icon={<FaPlusCircle />}>
				Add
			</CustomButton>
		</div>
	);
};

export default NewTodoBox;
