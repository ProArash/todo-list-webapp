import { getAllTodos } from '../../app/actions/todo/GetAll';
import TodoCard from '../Todo/TodoCard';

const MainBox = async () => {
	const todoList = await getAllTodos();
	return (
		<div className="flex flex-col gap-5 w-full p-5 border border-onPrimary rounded-md">
			<div className="grid grid-cols-4 w-full gap-5 overflow-y-auto h-screen">
				{todoList &&
					todoList.map((v) => (
						<TodoCard
							key={v.id}
							caption={v.caption}
							title={v.title}
							date={v.date}
							status={v.status}
						/>
					))}
			</div>
		</div>
	);
};

export default MainBox;
