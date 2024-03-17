import PropTypes from "prop-types";

function WantToCook({ cart, id, handelCurrentCook }) {
	const { recipe_name, preparing_time, calories, quantitys } = cart;

	return (
		<>
			<div className="grid grid-cols-12 items-center gap-3 lg:gap-0 py-4 px-3 lg:px-6 bg-[#28282808]">
				<h1 className="text-sm lg:text-[16px] flex items-center font-semibold font-fira text-[#282828CC] leading-7 col-span-1">
					{id}
				</h1>
				<h1 className="text-sm w-4/5 lg:text-[16px] flex items-center font-fira text-[#282828B2] lg:leading-7 col-span-4 lg:col-span-4">
					{recipe_name}
					<span className="ml-1 lg:ml-2 text-[12px] lg:text-sm text-emerald-600 font-bold">
						<sub>x{quantitys}</sub>
					</span>
				</h1>
				<h1 className="text-sm lg:text-[16px] flex items-center font-fira text-[#282828B2] leading-7 col-span-2">
					{preparing_time} min
				</h1>
				<h1 className="text-sm lg:text-[16px] flex items-center font-fira text-[#282828B2] leading-7 col-span-2">
					{calories} x {quantitys}
					<br />= {calories * quantitys} calories
				</h1>
				<div className="col-span-3 flex items-center justify-center">
					<button
						onClick={() => {
							handelCurrentCook(cart);
						}}
						className="text-[#150B2B] text-[10px] lg:text-[16px] font-medium bg-[#0BE58A] hover:bg-[#02b76c] py-1 lg:py-2 px-2 lg:px-4 rounded-[50px]"
					>
						Preparing
					</button>
				</div>
			</div>
		</>
	);
}

WantToCook.propTypes = {
	cart: PropTypes.object,
	id: PropTypes.number,
	orderCheck: PropTypes.array,
	handelCurrentCook: PropTypes.func,
	quantity: PropTypes.number,
};

export default WantToCook;
