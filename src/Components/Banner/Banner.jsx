import "./Banner.css";

function Banner() {
	return (
		<>
			<div className="banner p-5 lg:py-[130px] lg:px-[212px] flex flex-col items-center justify-center gap-2 lg:gap-6">
				<h1 className="text-white text-center text-2xl lg:text-[52px] font-bold lg:leading-[76px]">
					Discover an exceptional cooking class tailored for you!
				</h1>

				<p className="text-gray-300 text-sm lg:text-lg text-center mt-3 lg:mt-0 lg:leading-8 font-normal">
					Learn and Master Basic Programming, Data Structures,
					Algorithm, OOP, Database and solve 500+ coding problems to
					become an exceptionally well world-class Programmer.
				</p>

				<div className="flex gap-6 flex-wrap justify-center mt-4">
					<button className="py-2 px-5 lg:py-5 lg:px-8 rounded-[50px] bg-[#0BE58A] text-[#150B2B] lg:text-xl font-semibold">
						Explore Now
					</button>

					<button className="py-2 px-5 lg:py-5 lg:px-8 rounded-[50px] border-white border text-white bg-transparent lg:text-xl font-semibold">
						Our Feedback
					</button>
				</div>
			</div>
		</>
	);
}

export default Banner;
