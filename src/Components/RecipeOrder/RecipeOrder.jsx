import CurrentCook from "./CurrentCook";
import WantToCook from "./WantToCook";

function RecipeOrder() {
	return (
		<div className="col-span-12 lg:col-span-4 border border-[#28282833] rounded-2xl">
			<h1 className="mt-8 text-[#282828] text-2xl font-semibold text-center">
				Want to cook: 01
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

			<WantToCook />
			<WantToCook />

			<h1 className="mt-8 text-[#282828] text-2xl font-semibold text-center">
				Currently cooking: 02
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

			<CurrentCook />
			<CurrentCook />
			<CurrentCook />
			<CurrentCook />

			<div className="grid gap-2 lg:gap-3 grid-cols-12">
				<div className="col-span-5 lg:col-span-6"></div>

				<h1 className="text-[#282828CC] text-sm lg:text-[16px] font-medium leading-7 col-span-3 lg:col-span-3">
					Total Time = 45 min
				</h1>
				<h1 className="text-[#282828CC] text-sm lg:text-[16px] font-medium leading-7 col-span-3 lg:col-span-3">
					Total Time = 45 min
				</h1>
			</div>
		</div>
	);
}

export default RecipeOrder;
