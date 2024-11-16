import React from 'react';
import TodoCard, { TodoCardProps } from '../TodoCard/TodoCard';

const MainBox = () => {
	const todoList: TodoCardProps[] = Array(13).fill(0);
	return (
		<div className="flex flex-col gap-5 w-full p-5">
			<div className="grid grid-cols-4 w-full justify-items-center gap-5">
				{todoList.map((v, i) => (
					<TodoCard
						key={i}
						caption="bad baddd"
						title="bad title"
						date="March 2024"
						status={i % 3 == 0 ? false : true}
						color={i % 2 == 0 ? 'red' : 'yellow'}
						className={i % 3 == 0 ? 'bg-cyan-600' : 'bg-yellow-600'}
					/>
				))}
			</div>
		</div>
	);
};

export default MainBox;
