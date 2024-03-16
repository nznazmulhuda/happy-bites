import CurrentCook from "./CurrentCook";
import WantToCook from "./WantToCook";
import PropTypes from "prop-types";

function RecipeOrder({ order, handelCurrentCook, totalTime, cooking, totalCal }) {
	return (
		<div className="col-span-12 lg:col-span-4">
			<div className="border border-[#28282833] rounded-2xl pb-8">
				<h1 className="mt-8 text-[#282828] text-2xl font-semibold text-center">
					Want to cook: {order.length}
				</h1>

				<div className="divider w-4/5 mx-auto mt-0"></div>

				<div className="grid grid-cols-12 gap-3 lg:gap-0 px-3 lg:px-6">
					<div className="col-span-1"></div>

					<h1 className="col-span-4 text-[#878787] text-[16px] font-medium font-fira">
						Name
					</h1>

					<h1 className="col-span-2 text-[#878787] text-[16px] font-medium font-fira">
						Time
					</h1>

					<h1 className="col-span-2 text-[#878787] text-[16px] font-medium font-fira">
						Calories
					</h1>

					<div className="col-span-2"></div>
				</div>

				{order.map((cart, id) => (
					<WantToCook
						key={id}
						cart={cart}
						id={id + 1}
						handelCurrentCook={handelCurrentCook}
					/>
				))}

				<h1 className="mt-8 text-[#282828] text-2xl font-semibold text-center">
					Currently cooking: {cooking.length}
				</h1>

				<div className="divider w-4/5 mx-auto mt-0"></div>

				<div className="grid grid-cols-12 gap-3 px-6">
					<div className="col-span-1"></div>

					<h1 className="col-span-5 text-[#878787] text-[16px] font-medium font-fira">
						Name
					</h1>

					<h1 className="col-span-2 text-[#878787] text-[16px] font-medium font-fira">
						Time
					</h1>

					<h1 className="col-span-4 text-[#878787] text-[16px] font-medium font-fira">
						Calories
					</h1>
				</div>

				{cooking.map((cook, id) => (
					<CurrentCook key={id} cooking={cook} id={id + 1} />
				))}

				<div className="grid gap-2 lg:gap-3 grid-cols-12">
					<div className="col-span-5"></div>

					<h1 className="text-[#282828CC] text-sm lg:text-[16px] font-medium leading-7 col-span-3">
						Total Time = <br /> {totalTime} min
					</h1>

					<h1 className="text-[#282828CC] text-sm lg:text-[16px] font-medium leading-7 col-span-3">
						Total Calories = {totalCal} calories
					</h1>
				</div>
			</div>
		</div>
	);
}

RecipeOrder.propTypes = {
	order: PropTypes.array,
	handelCurrentCook: PropTypes.func,
	totalTime: PropTypes.number,
	cooking: PropTypes.array,
	totalCal: PropTypes.number,
};

export default RecipeOrder;
