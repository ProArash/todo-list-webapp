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
			defaultTheme="dark"
			themes={['dark', 'light']}
			enableSystem={false}>
			{children}
		</ThemeProvider>
	);
};

export default FixThemeProvider;
