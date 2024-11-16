import { Field, Description, Input } from '@headlessui/react';
import React from 'react';

interface CustomInputProps {
	label?: string;
	value?: string;
	onChange: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
	value,
	onChange,
	label,
}) => {
	return (
		<Field>
			<Description className="text-sm/6 text-white/50">
				{label}
			</Description>
			<Input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className={`mt-3 block w-full rounded-lg border border-primary bg-secondary p-2 text-sm/6 text-foreground focus:outline-none data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-white/25`}
			/>
		</Field>
	);
};

export default CustomInput;
