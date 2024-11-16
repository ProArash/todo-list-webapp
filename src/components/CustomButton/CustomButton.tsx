import { Button } from '@headlessui/react';
import { ReactNode } from 'react';

interface CustomButtonProps {
	children?: ReactNode;
	icon?: ReactNode;
	className?: string;
	onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	onClick,
	className,
	icon,
}) => {
	return (
		<Button
			onClick={onClick}
			className={`bg-primary flex p-2 items-center gap-2 justify-center rounded-md transition active:bg-onPrimary ${className}`}>
			{icon && icon}
			{children && <span>{children}</span>}
		</Button>
	);
};

export default CustomButton;
