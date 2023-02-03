// "./pages/ModalPage.js"
import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div className="flex space-x-2">
			<Button onClick={handleClose} primary>I Accept</Button>
			<Button onClick={handleClose} danger>I Decline</Button>
		</div>
	);

	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar} >
			<p>
				Here is an important agreement for you to accept
			</p>
		</Modal>
	);

	return (
		<div>
			<Button onClick={handleClick} primary>Open Modal</Button>
			{ showModal &&  modal }
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, velit sit amet porta imperdiet, nulla odio mattis justo, fringilla blandit lorem massa vel lectus. Aliquam bibendum ornare accumsan. Integer vitae viverra ex, id cursus diam. Nunc dictum sollicitudin laoreet. Donec vitae porta quam. Etiam luctus, justo sit amet sagittis iaculis, nibh tortor semper sapien, ac interdum risus nisi ut dolor. Vestibulum pharetra tortor nec ullamcorper accumsan. Proin blandit, tellus eget mattis consequat, nunc ante consequat odio, eget congue odio dui eu sem.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, velit sit amet porta imperdiet, nulla odio mattis justo, fringilla blandit lorem massa vel lectus. Aliquam bibendum ornare accumsan. Integer vitae viverra ex, id cursus diam. Nunc dictum sollicitudin laoreet. Donec vitae porta quam. Etiam luctus, justo sit amet sagittis iaculis, nibh tortor semper sapien, ac interdum risus nisi ut dolor. Vestibulum pharetra tortor nec ullamcorper accumsan. Proin blandit, tellus eget mattis consequat, nunc ante consequat odio, eget congue odio dui eu sem.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, velit sit amet porta imperdiet, nulla odio mattis justo, fringilla blandit lorem massa vel lectus. Aliquam bibendum ornare accumsan. Integer vitae viverra ex, id cursus diam. Nunc dictum sollicitudin laoreet. Donec vitae porta quam. Etiam luctus, justo sit amet sagittis iaculis, nibh tortor semper sapien, ac interdum risus nisi ut dolor. Vestibulum pharetra tortor nec ullamcorper accumsan. Proin blandit, tellus eget mattis consequat, nunc ante consequat odio, eget congue odio dui eu sem.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, velit sit amet porta imperdiet, nulla odio mattis justo, fringilla blandit lorem massa vel lectus. Aliquam bibendum ornare accumsan. Integer vitae viverra ex, id cursus diam. Nunc dictum sollicitudin laoreet. Donec vitae porta quam. Etiam luctus, justo sit amet sagittis iaculis, nibh tortor semper sapien, ac interdum risus nisi ut dolor. Vestibulum pharetra tortor nec ullamcorper accumsan. Proin blandit, tellus eget mattis consequat, nunc ante consequat odio, eget congue odio dui eu sem.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, velit sit amet porta imperdiet, nulla odio mattis justo, fringilla blandit lorem massa vel lectus. Aliquam bibendum ornare accumsan. Integer vitae viverra ex, id cursus diam. Nunc dictum sollicitudin laoreet. Donec vitae porta quam. Etiam luctus, justo sit amet sagittis iaculis, nibh tortor semper sapien, ac interdum risus nisi ut dolor. Vestibulum pharetra tortor nec ullamcorper accumsan. Proin blandit, tellus eget mattis consequat, nunc ante consequat odio, eget congue odio dui eu sem.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, velit sit amet porta imperdiet, nulla odio mattis justo, fringilla blandit lorem massa vel lectus. Aliquam bibendum ornare accumsan. Integer vitae viverra ex, id cursus diam. Nunc dictum sollicitudin laoreet. Donec vitae porta quam. Etiam luctus, justo sit amet sagittis iaculis, nibh tortor semper sapien, ac interdum risus nisi ut dolor. Vestibulum pharetra tortor nec ullamcorper accumsan. Proin blandit, tellus eget mattis consequat, nunc ante consequat odio, eget congue odio dui eu sem.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, velit sit amet porta imperdiet, nulla odio mattis justo, fringilla blandit lorem massa vel lectus. Aliquam bibendum ornare accumsan. Integer vitae viverra ex, id cursus diam. Nunc dictum sollicitudin laoreet. Donec vitae porta quam. Etiam luctus, justo sit amet sagittis iaculis, nibh tortor semper sapien, ac interdum risus nisi ut dolor. Vestibulum pharetra tortor nec ullamcorper accumsan. Proin blandit, tellus eget mattis consequat, nunc ante consequat odio, eget congue odio dui eu sem.
			</p>
		</div>
	)
}

export default ModalPage;
