import pic from "../../assets/spicy-chicken-stir-fry.jpg";
import Clock from "../../assets/clock.png";
import Fire from "../../assets/fire.png";
function Recipe() {
	return (
		<>
			<div className="card card-compact lg:p-6 bg-base-100 shadow-xl">
				<figure className="rounded-xl h-[40vh]">
					<img src={pic} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title text-[#282828] text-xl font-semibold">
						Spaghetti Bolognese
					</h2>
					<p className="text-[#878787] font-fira text-[16px] leading-7">
						Classic Italian pasta dish with savory meat sauce.
					</p>

					<div className="divider"></div>

					<h2 className="card-title text-[#282828] text-lg font-medium">
						Ingredients: 6
					</h2>

					<ul className="text-[#878787] text-lg leading-8 font-fira list-disc pl-8"> 
						<li>500g ground beef</li>
						<li>500g ground beef</li>
						<li>500g ground beef</li>
					</ul>

					<div className="divider"></div>

					<div className="flex items-center gap-12">
						<div className="flex gap-3 items-center">
							<img src={Clock} alt="" />
							<p className="text-[16px] font-fira text-[#282828CC]">
								30 minutes
							</p>
						</div>

						<div className="flex gap-2 items-center">
							<img src={Fire} alt="" />
							<p className="text-[16px] font-fira text-[#282828CC]">
								600 calories
							</p>
						</div>
					</div>

					<div className="card-actions">
						<button className="bg-[#0BE58A] rounded-[50px] py-4 px-6 text-[#150B2B] text-lg font-medium mt-5">
							Want to Cook
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Recipe;
