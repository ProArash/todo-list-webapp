'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

const FixThemeProvider = ({ children }: { children: ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}
	return (
		<ThemeProvider
			defaultTheme="light"
			themes={['dark', 'light']}
			enableSystem={true}>
			{children}
		</ThemeProvider>
	);
};

export default FixThemeProvider;
