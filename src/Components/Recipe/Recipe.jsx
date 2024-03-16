import Clock from "../../assets/clock.png";
import Fire from "../../assets/fire.png";
import PropTypes from "prop-types";

function Recipe({ RecipeCard, handelWantToCook }) {
	const {
		recipe_image,
		recipe_name,
		short_description,
		ingredients,
		preparing_time,
		calories,
	} = RecipeCard;

	return (
		<>
			<div className="card card-compact lg:p-6 bg-base-100 border border-[#28282833] shadow-xl">
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
						<div className="flex gap-3 items-center">
							<img src={Clock} alt="" />
							<p className="text-[16px] font-fira text-[#282828CC]">
								{preparing_time} min
							</p>
						</div>

						<div className="flex gap-2 items-center">
							<img src={Fire} alt="" />
							<p className="text-[16px] font-fira text-[#282828CC]">
								{calories} calories
							</p>
						</div>
					</div>

					<div className="card-actions">
						<button
							onClick={() => handelWantToCook(RecipeCard)}
							className="bg-[#0BE58A] rounded-[50px] py-4 px-6 text-[#150B2B] text-lg font-medium mt-5"
						>
							Want to Cook
						</button>
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
