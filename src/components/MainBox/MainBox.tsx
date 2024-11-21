import { getAllTodos } from '../../app/actions/todo/GetAll';
import TodoCard from '../Todo/TodoCard';

const MainBox = async () => {
	const todoList = await getAllTodos();
	return (
		<div className="flex flex-col gap-5 w-full rounded-md">
			<div className="grid md:grid-cols-4 grid-cols-1 w-full gap-5 overflow-y-auto h-screen justify-items-center">
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
