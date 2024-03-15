import { Banner, Header, OurRecipes, RecipesSec } from "./Components";

function App() {
	return (
		<>
			<div className="container mx-auto mt-12">
				<Header />
				<Banner />
				<OurRecipes /> 
				<RecipesSec />
			</div>
		</>
	);
}

export default App;
