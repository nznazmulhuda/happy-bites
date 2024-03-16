import { Banner, Header, OurRecipes, RecipesSec } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<div className="container mx-auto mt-12">
				<Header />
				<Banner />
				<OurRecipes />
				<RecipesSec />
			</div>

			<ToastContainer />
		</>
	);
}

export default App;
