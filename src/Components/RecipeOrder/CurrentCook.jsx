import PropTypes from "prop-types";

function CurrentCook({ cooking, id }) {
	const { recipe_name, preparing_time, calories } = cooking;
	return (
		<>
			<div className="grid grid-cols-12 gap-3 py-4 px-3 lg:px-6 bg-[#28282808]">
				<h1 className="text-sm lg:text-[16px] flex items-center font-semibold font-fira text-[#282828CC] leading-7 col-span-1">
					{id}
				</h1>
				<h1 className="text-sm lg:text-[16px] font-fira text-[#282828B2] leading-7 col-span-5">
					{recipe_name}
				</h1>
				<h1 className="text-sm lg:text-[16px] font-fira text-[#282828B2] leading-7 col-span-2">
					{preparing_time} min
				</h1>
				<h1 className="text-sm lg:text-[16px] font-fira text-[#282828B2] leading-7 col-span-4">
					{calories} calories
				</h1>
			</div>
		</>
	);
}

CurrentCook.propTypes = {
	cooking: PropTypes.object,
	id: PropTypes.number,
};

export default CurrentCook;
