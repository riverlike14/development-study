// "./index.js"
// import "./index.css";
import React from "react";
// import ReactDOM from "react-dom/client";
import { NavigationProvider } from "../context/navigation"

import Sidebar from "../components/Sidebar";
import Route from "../components/Route";
import AccordionPage from "./AccordionPage";
import DropdownPage from "./DropdownPage";
import ButtonPage from "./ButtonPage";
import ModalPage from "./ModalPage";
import CounterPage from "./CounterPage";

const CustomRouterPage = () => {
	return (
		<NavigationProvider>
			<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
				<Sidebar />
				<div className="col-span-5">
					<Route path="/CustomRouter/Accordion">
						<AccordionPage />
					</Route>
					<Route path="/CustomRouter/Dropdown">
						<DropdownPage />
					</Route>
					<Route path="/CustomRouter/Button">
						<ButtonPage />
					</Route>
					<Route path="/CustomRouter/Modal">
						<ModalPage />
					</Route>
					<Route path="/CustomRouter/Counter">
						<CounterPage initialCount="10" />
					</Route>
				</div>
			</div>
		</NavigationProvider>
	)
};

export default CustomRouterPage;
