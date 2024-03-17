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
			</div>

			<div className="border-t-2 mt-3 lg:mt-6 rounded-t-xl lg:rounded-t-[60px] section pb-10">
				<RecipesSec />
			</div>

			<ToastContainer autoClose={2000} />
		</>
	);
}

export default App;
