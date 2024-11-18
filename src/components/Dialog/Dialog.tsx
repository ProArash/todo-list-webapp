import { DialogPanel, DialogTitle, Dialog } from '@headlessui/react';
import React, { ReactNode } from 'react';
import CustomButton from '../CustomButton/CustomButton';

interface DialogProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	title: string;
	caption?: string;
	btnText: string;
	children?: ReactNode;
}

const DialogBox: React.FC<DialogProps> = ({
	isOpen,
	setIsOpen,
	caption,
	title,
	btnText,
	children,
}) => {
	return (
		<div>
			<Dialog
				open={isOpen}
				as="div"
				className="relative z-10 outline outline-onPrimary"
				onClose={() => setIsOpen(!isOpen)}>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<DialogPanel
							transition
							className="w-full max-w-md rounded-xl bg-secondary p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col gap-3">
							<DialogTitle
								as="h3"
								className="text-base/7 font-medium text-white">
								{title}
							</DialogTitle>
							<div>
								{caption && (
									<p className="text-sm/6 text-white/50">
										{caption}
									</p>
								)}
								{children && children}
							</div>

							<div>
								<CustomButton
								className='w-full'
									onClick={() => setIsOpen(!isOpen)}>
									{btnText}
								</CustomButton>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default DialogBox;
