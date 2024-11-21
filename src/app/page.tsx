import MainBox from '../components/MainBox/MainBox';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = async () => {
	return (
		<div className="flex gap-2 w-full">
			<div className="md:w-1/12">
				<Sidebar />
			</div>
			<div className="w-full">
				<MainBox />
			</div>
		</div>
	);
};

export default Home;
