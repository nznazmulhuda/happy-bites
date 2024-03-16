function WantToCook() {
	return (
		<div className="grid grid-cols-12 gap-3 lg:gap-0 py-4 px-3 lg:px-6 bg-[#28282808]">
			<h1 className="text-sm lg:text-[16px] flex items-center font-semibold font-fira text-[#282828CC] leading-7 col-span-1">
				1
			</h1>
			<h1 className="text-sm lg:text-[16px] font-fira text-[#282828B2] leading-7 col-span-3 lg:col-span-4">
				Chicken Caesar Salad
			</h1>
			<h1 className="text-sm lg:text-[16px] font-fira text-[#282828B2] leading-7 col-span-2">
				20 min
			</h1>
			<h1 className="text-sm lg:text-[16px] font-fira text-[#282828B2] leading-7 col-span-2">
				400 calories
			</h1>
			<div className="col-span-4 lg:col-span-3 flex items-center justify-center">
				<button className="text-[#150B2B] text-sm lg:text-[16px] font-medium bg-[#0BE58A] py-1 lg:py-2 px-2 lg:px-4 rounded-[50px]">
					Preparing
				</button>
			</div>
		</div>
	);
}

export default WantToCook;
