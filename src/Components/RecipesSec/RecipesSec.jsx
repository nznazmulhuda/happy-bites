import RecipeOrder from "../RecipeOrder/RecipeOrder";
import Recipes from "../Recipes/Recipes";

function RecipesSec() {
	return (
		<>
			<div className="grid grid-cols-12 gap-6 mt-12">
				<Recipes />
				<RecipeOrder />
			</div>
		</>
	);
}

export default RecipesSec;
