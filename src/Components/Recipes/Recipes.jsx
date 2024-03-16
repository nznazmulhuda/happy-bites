import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import { useEffect } from "react";

function Recipes() {
	const [Recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch("./Recipes.json")
			.then((res) => res.json())
			.then((data) => setRecipes(data));
	}, []);

	return (
		<>
			<div className="col-span-12 lg:col-span-8 grid gap-6 lg:grid-cols-2">
				{Recipes.map((RecipeCard) => (
					<Recipe
						key={RecipeCard.recipe_id}
						RecipeCard={RecipeCard}
					/>
				))}
			</div>
		</>
	);
}

export default Recipes;
