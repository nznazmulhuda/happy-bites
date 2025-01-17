import PropTypes from "prop-types";

function CurrentCook({ cooking, id }) {
	const { recipe_name, preparing_time, calories, quantitys } = cooking;
	return (
		<>
			<div className="grid grid-cols-12 gap-3 items-center py-4 px-3 lg:px-6 bg-[#28282808]">
				<h1 className="text-sm lg:text-[16px] flex items-center font-semibold font-fira text-[#282828CC] leading-7 col-span-1">
					{id}
				</h1>
				<h1 className="text-sm lg:text-[16px] font-fira text-[#282828B2] leading-7 col-span-5">
					{recipe_name}
					<span className="ml-2 text-[12px] lg:text-sm text-emerald-600 font-bold">
						<sub>x{quantitys}</sub>
					</span>
				</h1>
				<h1 className="text-sm lg:text-[16px] font-fira text-[#282828B2] leading-7 col-span-2">
					{preparing_time} min
				</h1>
				<h1 className="text-sm lg:text-[16px] font-fira text-center lg:text-left text-[#282828B2] leading-7 col-span-4">
					{calories} x {quantitys}
					<br /> = {calories * quantitys} calories
				</h1>
			</div>
		</>
	);
}

CurrentCook.propTypes = {
	cooking: PropTypes.object,
	id: PropTypes.number,
	quan: PropTypes.number,
};

export default CurrentCook;
