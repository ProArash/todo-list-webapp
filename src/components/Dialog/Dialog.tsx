import { DialogPanel, DialogTitle, Dialog } from '@headlessui/react';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

interface DialogProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

const DialogBox: React.FC<DialogProps> = ({ isOpen, setIsOpen }) => {
	return (
		<div>
			<Dialog
				open={isOpen}
				as="div"
				className="relative z-10 focus:outline-none"
				onClose={() => setIsOpen(!isOpen)}>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<DialogPanel
							transition
							className="w-full max-w-md rounded-xl bg-secondary p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
							<DialogTitle
								as="h3"
								className="text-base/7 font-medium text-white">
								Payment successful
							</DialogTitle>
							<p className="mt-2 text-sm/6 text-white/50">
								Your payment has been successfully submitted.
								We’ve sent you an email with all of the details
								of your order.
							</p>
							<div className="mt-4">
								<CustomButton
									onClick={() => setIsOpen(!isOpen)}>
									Got it, thanks!
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
