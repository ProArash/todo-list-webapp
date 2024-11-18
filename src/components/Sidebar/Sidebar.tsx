'use client';
import { FaPlus } from 'react-icons/fa';
import CustomButton from '../CustomButton/CustomButton';
import { useState } from 'react';
import DialogBox from '../Dialog/Dialog';
import NewTodoBox from '../Todo/NewTodoBox';

const Sidebar = () => {
	const [dialog, setDialog] = useState(false);
	const handleClick = () => {
		setDialog(true);
	};
	return (
		<div className="flex flex-col gap-5 h-screen overflow-y-auto border border-secondary w-fit p-5 rounded-r-lg items-center">
			<p className="border-b border-b-secondary pb-2">Todo list</p>
			<CustomButton
				className="!rounded-full w-full"
				onClick={() => {
					handleClick();
				}}
				icon={<FaPlus />}
			/>
			<div className="w-[20px] h-[20px] rounded-full bg-red-500" />
			<div className="w-[20px] h-[20px] rounded-full bg-blue-500" />
			<div className="w-[20px] h-[20px] rounded-full bg-yellow-500" />
			<div className="w-[20px] h-[20px] rounded-full bg-orange-500" />
			<div className="w-[20px] h-[20px] rounded-full bg-violet-500" />
			<div className="w-[20px] h-[20px] rounded-full bg-zinc-500" />
			{dialog && (
				<DialogBox
					btnText="Ok"
					isOpen={dialog}
					setIsOpen={(e) => setDialog(e)}
					title="Add new todo">
					<NewTodoBox />
				</DialogBox>
			)}
		</div>
	);
};

export default Sidebar;
