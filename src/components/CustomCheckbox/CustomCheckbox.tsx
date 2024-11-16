import { Checkbox } from '@headlessui/react';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface CustomCheckboxProps {
	className?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
	className = '',
	checked = false,
	onChange,
	...props
}) => {
	return (
		<Checkbox
			className={`${className} flex items-center justify-center group size-4 rounded border bg-primary w-[20px] h-[20px]`}
			checked={checked}
			onChange={onChange}
			{...props}>
			<FaCheck className="text-onPrimary opacity-0 group-data-[checked]:opacity-100" />
		</Checkbox>
	);
};

export default CustomCheckbox;
