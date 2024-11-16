'use client';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggler = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className="bg-gray-500 w-fit rounded-full p-1">
			{theme === 'dark' ? (
				<FaSun
					className="text-foreground"
					size={30}
					onClick={() => setTheme('light')}
				/>
			) : (
				<FaMoon
					className="text-background"
					size={30}
					onClick={() => setTheme('dark')}
				/>
			)}
		</div>
	);
};

export default ThemeToggler;
