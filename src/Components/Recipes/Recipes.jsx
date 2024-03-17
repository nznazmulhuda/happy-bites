import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import { useEffect } from "react";
import PropTypes from "prop-types";

function Recipes({ handelWantToCook }) {
	const [Recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch("./Recipes.json")
			.then((res) => res.json())
			.then((data) => setRecipes(data));
	}, []);

	return (
		<>
			<div className="col-span-12 lg:col-span-7 grid gap-6 lg:grid-cols-2">
				{Recipes.map((RecipeCard) => (
					<Recipe
						key={RecipeCard.recipe_id}
						RecipeCard={RecipeCard}
						handelWantToCook={handelWantToCook}
					/>
				))}
			</div>
		</>
	);
}

Recipes.propTypes = {
	handelWantToCook: PropTypes.func,
};

export default Recipes;
