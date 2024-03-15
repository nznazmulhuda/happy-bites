import Recipe from "../Recipe/Recipe";

function Recipes() {
	return (
		<>
			<div className="col-span-12 lg:col-span-8 grid gap-6 lg:grid-cols-2">
				<Recipe />
				<Recipe />
				<Recipe />
				<Recipe />
				<Recipe />
				<Recipe />
				<Recipe />
				<Recipe />
				<Recipe />
			</div>
		</>
	);
}

export default Recipes;
