// "./components/Modal.js"
import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = ({ children, onClose, actionBar }) => {
	useEffect(() => {
		document.body.classList.add("overflow-hidden");
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	return ReactDOM.createPortal(
		<div>
			<div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
			<div className="fixed inset-40 h-80 p-10 bg-white rounded-lg">
				<div className="flex flex-col justify-between h-full">
					<div className="flex justify-center">
						<h1 className="text-xl font-bold">Modal Header</h1>
					</div>
					<hr />
					{children}
					<hr />
					<div className="flex justify-end">
						{actionBar}
					</div>
				</div>
			</div>
		</div>,
		document.querySelector(".modal-container")
	);
};

export default Modal;
