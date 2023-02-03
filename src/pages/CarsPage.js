import "bulma/css/bulma.css";
import "../styles/Cars.css";
import CarForm from "../components/CarForm";
import CarList from "../components/CarList";
import CarSearch from "../components/CarSearch";
import CarValue from "../components/CarValue";
import { Provider } from "react-redux";
import { store } from "../store";

const CarsPage = () => {
  return (
		<Provider store={store}>
			<div className="container">
				<CarForm />
				<CarSearch />
				<CarList />
				<CarValue />
			</div>
		</Provider>
  );
}

export default CarsPage;
