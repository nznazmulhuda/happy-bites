import SearchIcon from "../../assets/search.png";
import Avater from "../../assets/avater.png";

function Header() {
	return (
		<>
			<header className="space-y-5 lg:flex justify-between items-center">
				<div className="logo">
					<h1 className="text-[#150B2B] text-4xl text-center cursor-pointer font-bold">
						Recipe Calorise
					</h1>
				</div>

				<nav>
					<ul className="flex flex-wrap justify-center gap-5 lg:gap-12 items-center text-[#150B2BB2] text-[16px]">
						<li className="cursor-pointer">Home</li>
						<li className="cursor-pointer">Recipes</li>
						<li className="cursor-pointer">About</li>
						<li className="cursor-pointer">Search</li>
					</ul>
				</nav>

				<div className="search-field flex items-center justify-center gap-4">
					<div className="flex py-3 px-6 rounded-[50px] bg-[#150B2B0D] items-center gap-2">
						<img
							className="bg-transparent"
							src={SearchIcon}
							alt="Search icon"
						/>

						<input
							className="bg-transparent border-none outline-none placeholder:text-[#150B2BB2]"
							type="text"
							placeholder="Search"
						/>
					</div>

					<div className="bg-[#0BE58A] rounded-full p-2">
						<img className="w-full h-full" src={Avater} alt="" />
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
