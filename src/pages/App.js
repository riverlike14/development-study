import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PlaylistsPage from "./PlaylistsPage";
import CarsPage from "./CarsPage";
import ImageSearchPage from "./ImageSearchPage";
import ButtonPage from "./ButtonPage";
import AccordionPage from "./AccordionPage";
import DropdownPage from "./DropdownPage";
import CustomRouterPage from "./CustomRouterPage";
import ModalPage from "./ModalPage";
import CounterPage from "./CounterPage";
import ReactBookPage from "./ReactBookPage";

const App = () => {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/ReactBook" element={<ReactBookPage />} />
				<Route path="/Playlists" element={<PlaylistsPage />} />
				<Route path="/Cars" element={<CarsPage />} />
				<Route path="/ImageSearch" element={<ImageSearchPage />} />
				<Route path="/Components/Button" element={<ButtonPage />}/>
				<Route path="/Components/Accordion" element={<AccordionPage />}/>
				<Route path="/Components/Dropdown" element={<DropdownPage />}/>
				<Route path="/CustomRouter" element={<CustomRouterPage />}/>
				<Route path="/CustomRouter/Accordion" element={<CustomRouterPage />}/>
				<Route path="/CustomRouter/Dropdown" element={<CustomRouterPage />}/>
				<Route path="/CustomRouter/Button" element={<CustomRouterPage />}/>
				<Route path="/CustomRouter/Modal" element={<CustomRouterPage />}/>
				<Route path="/CustomRouter/Counter" element={<CustomRouterPage />}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
