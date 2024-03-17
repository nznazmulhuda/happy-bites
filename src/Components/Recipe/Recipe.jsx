import { useState } from "react";
import Clock from "../../assets/clock.png";
import Fire from "../../assets/fire.png";
import PropTypes from "prop-types";

function Recipe({ RecipeCard, handelWantToCook }) {
	const [quantitys, setQuantitys] = useState(1);

	const {
		recipe_image,
		recipe_name,
		short_description,
		ingredients,
		preparing_time,
		calories,
		recipe_id,
	} = RecipeCard;

	const recipe = {
		recipe_image: recipe_image,
		recipe_name: recipe_name,
		short_description: short_description,
		ingredients: ingredients,
		preparing_time: preparing_time,
		calories: calories,
		quantitys: quantitys,
		recipe_id: recipe_id,
	};

	return (
		<>
			<div className="card card-compact lg:p-6 bg-gray-100 border-2 border-[#1b0f614e] shadow-xl">
				<figure className="rounded-xl h-[40vh]">
					<img
						className="w-full h-full"
						src={recipe_image}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title text-[#282828] text-xl font-semibold">
						{recipe_name}
					</h2>
					<p className="text-[#878787] font-fira text-[16px] leading-7">
						{short_description}
					</p>

					<div className="divider"></div>

					<h2 className="card-title text-[#282828] text-lg font-medium">
						Ingredients: {ingredients.length}
					</h2>

					<ul className="text-[#878787] text-lg leading-8 font-fira list-disc pl-8">
						{ingredients.map((ingredient, id) => (
							<li key={id}>{ingredient}</li>
						))}
					</ul>

					<div className="divider"></div>

					<div className="flex items-center gap-12">
						<div className="flex gap-1 items-center">
							<img src={Clock} alt="" />
							<p className="text-[16px] font-fira text-[#282828CC]">
								{preparing_time} min
							</p>
						</div>

						<div className="flex gap-1 items-center">
							<img src={Fire} alt="" />
							<p className="text-[16px] font-fira text-[#282828CC]">
								{calories} calories
							</p>
						</div>
					</div>

					<div className="divider mb-0"></div>

					<div className="card-actions grid lg:flex grid-cols-12 justify-between items-center">
						<button
							onClick={() => {
								handelWantToCook(recipe, RecipeCard);
							}}
							className="col-span-6 bg-[#0BE58A]  hover:bg-[#02b76c] rounded-[50px] py-2 lg:py-4 px-4 lg:px-6 text-[#150B2B] text-[12px] lg:text-lg font-medium mt-5 shadow-xl border border-[#02b76c]"
						>
							Want to Cook
						</button>

						<div className="col-span-6 flex lg:gap-1 items-center -mr-4 mt-4">
							<button
								onClick={() => setQuantitys(quantitys + 1)}
								className="btn btn-ghost text-lg lg:text-2xl"
							>
								+
							</button>
							<h1 className="text-sm lg:text-xl border p-2 lg:p-3 rounded-xl">
								x {quantitys > 0 ? quantitys : setQuantitys(1)}
							</h1>
							<button
								onClick={() => setQuantitys(quantitys - 1)}
								className="btn btn-ghost text-lg lg:text-2xl"
							>
								-
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Recipe.propTypes = {
	RecipeCard: PropTypes.object,
	handelWantToCook: PropTypes.func,
};

export default Recipe;
