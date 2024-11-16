import MainBox from '../components/MainBox/MainBox';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = async () => {
	return (
		<div className="flex gap-5 w-full">
			<div className="w-1/12">
				<Sidebar />
			</div>
			<div className="w-full">
				<MainBox />
			</div>
		</div>
	);
};

export default Home;
